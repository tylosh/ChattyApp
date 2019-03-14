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
    this.state = {
      loading: true,
      currentUser: "Tyler",
      messages: [
        {
          id:1,
          type: "incomingMessage",
          content: "I won't be impressed with technology until I can download food.",
          username: "Anonymous1"
        },
        {
          id:2,
          type: "incomingNotification",
          content: "Anonymous1 changed their name to nomnom",
        },
        {
          id:3,
          type: "incomingMessage",
          content: "I wouldn't want to download Kraft Dinner. I'd be scared of cheese packet loss.",
          username: "Anonymous2"
        },
        {
          id:4,
          type: "incomingMessage",
          content: "...",
          username: "nomnom"
        },
        {
          id:5,
          type: "incomingMessage",
          content: "I'd love to download a fried egg, but I'm afraid encryption would scramble it",
          username: "Anonymous2"
        },
        {
          id:6,
          type: "incomingMessage",
          content: "This isn't funny. You're not funny",
          username: "nomnom"
        },
        {
          id:7,
          type: "incomingNotification",
          content: "Anonymous2 changed their name to NotFunny",
        },
      ]
    }
  }

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
          < MessageList messageList = {this.state.messages}  />  
          < ChatBar currentUser={this.state.currentUser}/>
        </div>
      );
    }
    
    
  }
}
export default App;
