import React, { Component } from 'react';

//is this correct or will it be import or picked up somewhere else? Looks like yes from Karl lecture
//need to consider whether it should be function (no state etc.) otherwise 'class extend'
require('../styles/home.scss')

import ChatBar from './ChatBar.jsx'
import NavBar from './NavBar.jsx'
import MessageList from './MessageList.jsx'

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {loading: true};
  }
  // Called after the component was rendered and it was attached to the
  // DOM. This is a good place to make AJAX requests or setTimeout.
  componentDidMount() {
    // After 3 seconds, set `loading` to false in the state.
    setTimeout(() => {
      this.setState({loading: false}); // this triggers a re-render!
    }, 3000)
  }
  
  render() {
    if (this.state.loading) {
      return <h1>Loading...</h1>
    } else {
      return (
        <div>
          < NavBar />
          < MessageList />
            <div className="message">
              <span className="message-username">Anonymous1</span>
              <span className="message-content">I won't be impressed with technology until I can download food.</span>
            </div>
            <div className="message system">
              Anonymous1 changed their name to nomnom.
            </div>
          < ChatBar />
        </div>
      );
    }
    
    
  }
}
export default App;
