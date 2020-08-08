import React from 'react';
import './App.css';
import besideHeading from './Assets/besideHeading.png';
import newsImage from './Assets/newsImage.png';
import Options from './Options';
import { render } from 'react-dom';

class App extends React.Component {
  render() {
    let options = [];
    for (var i = 0; i<3; i++) {
      options.push(<Options number={i} key = {i}/>);
    }
  return (
    <div className="App">
        <header className="App-header">
          <div className="Heading">
            <img src = {besideHeading} alt='headingLogo'/>
            <h1>Left, Right, Center!</h1>
            </div>
          <div className="Spacing"></div>
          <div className = "Body">
            <img src={newsImage} alt="newsLogo"></img>
            <p>How about balancing the political nature of this article with these links?</p>
          </div>
          <div className="Options">
            {options}
          </div>
        </header>
    </div>
  );
}
}

export default App;
