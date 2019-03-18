import React, { Component } from 'react';

class ChatBar extends Component {
    render() {

        if (this.props.currentUser) {
            let user = this.props.currentUser;
        } 

        let newChatMessage = this.props.newChatMessage;
        let usernameChange = this.props.usernameChange;

        return ( 
            <footer className="chatbar">
                <input 
                    onKeyPress={event => {
                        if(event.key === 'Enter') {
                        usernameChange(event.target.value)
                        }
                    }}
                    className="chatbar-username" 
                    placeholder="Your Name (Optional)" 
                />
                <input 
                    onKeyPress={event => {
                        if(event.key === 'Enter') {
                        newChatMessage(event.target.value)
                        event.target.value = ''
                        }
                    }}
                    className="chatbar-message" 
                    placeholder="Type a message and hit ENTER" 
                />
            </footer>
        )
    }
}

export default ChatBar