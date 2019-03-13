import React, { Component } from 'react';

//is this correct or will it be import or picked up somewhere else? Looks like yes from Karl lecture
//need to consider whether it should be function (no state etc.) otherwise 'class extend'
require('../styles/home.scss')

//not 100% sure this is correct location yet
import ChatBar from './ChatBar.jsx'

class App extends Component {
  render() {
    return (
      <div>
        <main className="messages">
          <div className="message">
            <span className="message-username">Anonymous1</span>
            <span className="message-content">I won't be impressed with technology until I can download food.</span>
          </div>
          <div className="message system">
            Anonymous1 changed their name to nomnom.
          </div>
        </main>
        < ChatBar />
      </div>
    );
  }
}
export default App;
