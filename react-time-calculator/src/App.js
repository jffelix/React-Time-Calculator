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

  function generateCurrentTime () {
    const timeNow = moment().format('h:mm:ss a');
    console.log("timeNow: ", timeNow);

    // will eventually need to update time every minute
    setCurrentTime(timeNow);
  }

  function submitTime(e) {
      e.preventDefault();
      console.log("hours: ", hoursInput);
      console.log("minutes: ", minutesInput);
  }

  return (
    <div className="App">
      <h1>React Time Calculator</h1>
      <div className="currentTime">
          <h2>Current Time</h2>
          <h4>{currentTime}</h4>
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