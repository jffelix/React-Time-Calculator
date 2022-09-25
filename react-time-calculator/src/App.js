// import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
// import EntryList from "./sub-components/EntryList.js";
import moment from "moment";

function App() {

  useEffect(() => {
    generateCurrentTime();
  }, [])

  const [ currentTime, setCurrentTime ] = useState("");
  const [ hoursInput, setHoursInput ] = useState("");
  const [ minutesInput, setMinutesInput ] = useState("");
  const [ displayResult, setDisplayResult ] = useState(false);
  const [ newTimeDisplay, setNewTimeDisplay ] = useState("");

  function generateCurrentTime () {
    const timeNow = moment().format('h:mm a');
    console.log("timeNow: ", timeNow);

    // will eventually need to update time every minute
    setCurrentTime(timeNow);
  }

  function convertHoursToMinutes(hours) {
    return hours * 60;
  }

  function addTotalMinutes(currentMinutes, inputMinutes) {
    const addedMinutes = currentMinutes + inputMinutes;
    return addedMinutes;
  }

  function getCalculatedTime(totalMinutes) {

    // let allows variable to be reassigned
      // unable to substract if const
    let timeHours = Math.floor(totalMinutes / 60);
    console.log("timeHours: ", timeHours);

    let timeMinutes = totalMinutes % 60;
    console.log("timeMinutes: ", timeMinutes);

    // use modulo operator for time over 24 hours
    if (timeHours >= 24) {
      timeHours %= 24;
    }

    const newTime = timeHours + ":" + timeMinutes;
    return newTime;
  }

  function submitTime(e) {
      e.preventDefault();
      
      // convert time to only minutes
        // add submitted time
          // convert result back into hours:minutes

      const getHours = new Date().getHours();
      const getMinutes = new Date().getMinutes();
      const totalCurrentMinutes = getMinutes + convertHoursToMinutes(getHours);
      console.log("totalCurrentMinutes: ", totalCurrentMinutes);
      
      const totalInputMinutes = (Number(hoursInput) * 60) + Number(minutesInput);
      console.log("totalInputMinutes: ", totalInputMinutes);

      const totalCalculatedMinutes = addTotalMinutes(totalCurrentMinutes, totalInputMinutes);
      console.log("totalCalculatedMinutes: ", totalCalculatedMinutes);

      
      setNewTimeDisplay(getCalculatedTime(totalCalculatedMinutes).toString());
      console.log("newTimeDisplay: ", newTimeDisplay);

      setDisplayResult(true);
  }

  function clearTimeResult() {
      setHoursInput("");
      setMinutesInput("");
      setDisplayResult(false);
  }

  return (
    <div className="App">
      <h1>React Time Calculator</h1>
      <div className="currentTime">
          <h3>Current Time</h3>
          <h2>{currentTime}</h2>
      </div>
      <form onSubmit={submitTime}>
          <div className="timeInput">
            <div className="hoursInput">
              <h4>Hour(s)</h4>
              <input onChange={(e) => setHoursInput(e.target.value)} value={hoursInput}/>
            </div>
            <div className="minutesInput">
              <h4>Minutes</h4>
              <input onChange={(e) => setMinutesInput(e.target.value)} value={minutesInput}/>
            </div>
            <p></p>
            {/* <div className="entryList">
              <EntryList />
            </div> */}
            <p></p>
            <div className="addTime">
              <button>Add Time</button>
            </div>
            <div className="newTime">
              <h3>The future time would be: </h3>
              {
                displayResult ? null :
                <div>
                  <h2>{newTimeDisplay}</h2>
                  <button onClick={clearTimeResult}>Clear</button>
                </div>
              }
            </div>
          </div>
      </form>
    </div>
  );
}

export default App;


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }