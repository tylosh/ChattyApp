import React, { Component } from 'react';

class ChatBar extends Component {
    render() {
        let user = "";
        if (this.props.currentUser) {
            user = this.props.currentUser;
        } 

        let newChatMessage = this.props.newChatMessage 
        console.log(this.props)
        console.log(this.props.currentUser)

        


        return ( 
            <footer className="chatbar">
                <input 
                    
                    className="chatbar-username" 
                    placeholder="Your Name (Optional)" 
                />
                <input 
                    onKeyPress={event => {
                        if(event.key === 'Enter') {
                        console.log(event.target.value)
                        newChatMessage(event.target.value)
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