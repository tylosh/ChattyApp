import React, { Component } from 'react';
import ChatBar from './ChatBar.jsx'
import NavBar from './NavBar.jsx'
import MessageList from './MessageList.jsx'

require('../styles/home.scss')

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentUser: "Anonymous",
      messages: [],
      userCount: 0
    }
    
    this.socket = new WebSocket('ws://localhost:3001/');
    
    this.socket.onmessage = (event) => {
      let parsedMessage = JSON.parse(event.data);
      let newUserCount = this.state.userCount
      
      if (parsedMessage.type === "incomingUserCountUpdate") {
        newUserCount = parsedMessage.userCount;
      }      

      this.setState({      
        messages: this.state.messages.concat(parsedMessage),
        userCount: newUserCount
      })
    }
    
    this.newChatMessage = this.newChatMessage.bind(this);
    this.usernameChange = this.usernameChange.bind(this);
  }

  componentDidMount() {
    console.log("componentDidMount <App />");
    
    this.socket.addEventListener("open", (evt) => {
      console.log("Connected to Server")
    });
    
    setTimeout(() => {
      console.log("Simulating incoming message");
      
      const newMessage = { type: "incomingMessage", id: "sdkfljasdflkjadsf", content: "Welcome to Chatty!", username: "ChattyBot"};
      //left in a fake bot/welcome msg
      const messages = this.state.messages.concat(newMessage)
      // Update the state of the app component.
      this.setState({messages: messages})
    }, 2000);
  }
  
  // sends chat msg from client to server
  newChatMessage = function(msg) {
    const newChat = {
      type: "postMessage",
      content: msg,
      username: this.state.currentUser
    }
    this.socket.send(JSON.stringify(newChat))
  }

  // sends name change from client to server, updates state of current user
  usernameChange = function(newName) {
    const newUsername = {
      type: "postNotification",
      //backticks ES6 wouldn't work so using string + concatenate
      content: this.state.currentUser + " changed their name to " + newName
    }
    this.socket.send(JSON.stringify(newUsername))
    
    this.setState({
      currentUser: newName
    })
  }
  
  render() {
    return (
      <div>
        < NavBar userCount={this.state.userCount} />
        < MessageList messageList = {this.state.messages} />  
        < ChatBar currentUser={this.state.currentUser} newChatMessage={this.newChatMessage} usernameChange={this.usernameChange} />
      </div>
    );
  }
}
export default App;
