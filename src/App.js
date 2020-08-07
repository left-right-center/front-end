import React from 'react';
import './App.css';
import besideHeading from './Assets/besideHeading.png'

function App() {
  return (
    <div className="App">
        <header className="App-header">
          <div className="Heading">
            <img src = {besideHeading} alt='headingLogo'/>
              <div className="Name"> <span> <h1>Left, Right, Center!</h1> </span></div>
            </div>
        </header>
    </div>
  );
}

export default App;
