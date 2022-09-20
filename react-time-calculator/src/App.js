// import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import EntryList from "./sub-components/EntryList.js";

function App() {

  useEffect(() => {
    generateCurrentTime();
  }, [])

  const [ currentTime, setCurrentTime ] = useState("");

  function generateCurrentTime () {
    const timeNow = new Date().toISOString();
    setCurrentTime(timeNow);
  }

  return (
    <div className="App">
      <h1>React Time Calculator</h1>
      <div className="currentTime">
        <h2>Current Time</h2>
        <h4>{currentTime}</h4>
      </div>
      <div className="timeInput">
        <div className="hoursInput">
          <h4>Hours</h4>
          <input/>
        </div>
        <div className="minutesInput">
          <h4>Minutes</h4>
          <input/>
        </div>
        <p></p>
        <div className="entryList">
          <EntryList />
        </div>
        <p></p>
        <div className="addTime">
          <button>Add Time</button>
        </div>
      </div>
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