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
      messages: []
    }
    this.socket = new WebSocket('ws://localhost:3001/');
    this.socket.onmessage = (event) => {
      //console.log("-------:)----",event);
      let parsedMessage = JSON.parse(event.data);
      this.setState({
        messages: this.state.messages.concat(parsedMessage)
      })
      
      // code to handle incoming message
    }
    this.newChatMessage = this.newChatMessage.bind(this);
  }

  componentDidMount() {
    console.log("componentDidMount <App />");
    //const socket = new WebSocket("ws://localhost:3001");
    this.socket.addEventListener("open", function(evt){
      this.socket.send("New Connection")
      console.log("Connected to Server")
    });
    
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
    const newChat = {
      type: "sendMessage",
      content: msg,
      username: "tyler"
    }
    this.socket.send(JSON.stringify(newChat))
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
