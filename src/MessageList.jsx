import React, { Component } from 'react';

import Message from './Message.jsx'

class MessageList extends Component {
    constructor(props) {
        super(props);
        const messageArray = this.props.messageList;
        let chatMessages = messageArray.filter(function(msg) {
            return msg.type === "incomingMessage" 
        })

        this.state = {chatMessages};

        

        console.log("***",chatMessages)

    }

    render() {
        return (
            <main className="messages">
                < Message chatMessages={this.state.chatMessages} />
            </main>
        )
    }
}

export default MessageList