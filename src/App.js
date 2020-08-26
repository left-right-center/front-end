/* global chrome */
import React from 'react';
import './App.css';
import besideHeading from './Assets/besideHeading.png';
import newsImage from './Assets/newsImage.png';
import Options from './Options';
import { render } from 'react-dom';
import axios from 'axios'

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      options: [],
      renderLinks: []
    }
  }

  async fetchLinks() {

    return new Promise( async (resolve, reject) => {
      let url
      try {
        await chrome.tabs.query({active: true, currentWindow: true}, tabs => {
        url = tabs[0].url;
        // alert(url, '1')
        resolve(url)
      });
      } catch (err) {
        alert(err)
        reject(err)
      }
    })
    
  }

  async fr(url) {
    return new Promise( async (resolve, reject) => {
      try {
// alert(url)
    axios.get('http://localhost:9000/links', {
      params: {
        url
      }
    }).then(response => {
      // alert(response.data)
      this.setState({
        options: response.data
      })
      resolve(response.data)
    })
      } catch (err) {
        reject(err)
      }
      
    })
    
  }

  async wtv(rand) {
    let aritra=[]
    for (let i = 0; i<3; i++) {
      aritra.push(<Options number={i} key = {i} links={this.state.options[i]}/>);
      // alert(this.state.options[i])
    }
    this.setState({
      renderLinks: aritra
    })
  }

  async componentDidMount() {
    const response = await this.fetchLinks()
    const rand = await this.fr(response)
    this.wtv(rand)
  }

  render() {
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
            {this.state.renderLinks}
          </div>
        </header>
    </div>
  );
}
}

export default App;
