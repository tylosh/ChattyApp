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
      currentUser: "",
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
    this.newChatMessage = this.newChatMessage.bind(this);
  }

  componentDidMount() {
    console.log("componentDidMount <App />");
    setTimeout(() => {
      console.log("Simulating incoming message");
      //maybe get rid of these comments down the road? Think this will get deleted anyways?
      // Add a new message to the list of messages in the data store
      const newMessage = {id: 8, type: "incomingMessage", content: "Hello there!", username: "Michelle"};
      const messages = this.state.messages.concat(newMessage)
      // Update the state of the app component.
      // Calling setState will trigger a call to render() in App and all child components.
      this.setState({messages: messages})
    }, 3000);
  }
  
  newChatMessage = function(msg) {
    this.setState({
      //in real time will this sequential id work? maybe test if id exists before posting, and if it does, +1?
      messages: this.state.messages.concat({
        id: this.state.messages.length + 1,
        type: "incomingMessage",
        content: msg,
        username: "tyler"
      })  
    })
  }
  
  

  render() {
    return (
      <div>
        < NavBar />
        < MessageList messageList = {this.state.messages} />  
        < ChatBar currentUser={this.state.currentUser} newChatMessage={this.newChatMessage} />
      </div>
    );
  }
}
export default App;
