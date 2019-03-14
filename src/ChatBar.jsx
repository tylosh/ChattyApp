import React, { Component } from 'react';

class ChatBar extends Component {
    render() {
        let user = "";
        if (this.props.currentUser) {
            user = this.props.currentUser;
        } 
        
        return ( 
            <footer className="chatbar">
                <input className="chatbar-username" value={user} placeholder="Your Name (Optional)" />
                <input className="chatbar-message" placeholder="Type a message and hit ENTER" />
            </footer>
        )
    }
}

export default ChatBar