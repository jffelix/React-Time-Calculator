import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";

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
      <h1>Hello from App Component!</h1>
      <div className="currentTime">
        <h2>Current Time</h2>
        <h4>{currentTime}</h4>
      </div>
      <div className="timeInput">
        <input/>
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