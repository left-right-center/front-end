import React from 'react';
import './App.css';
import besideHeading from './Assets/besideHeading.png'

function App() {
  return (
    <div className="App">
        <header className="App-header">
          <div className="Heading">
            <img src = {besideHeading} alt='headingLogo'/>
              <div className="Name"> <span>Left, Right, Center! </span></div>
            </div>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
            
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
    </div>
  );
}

export default App;
