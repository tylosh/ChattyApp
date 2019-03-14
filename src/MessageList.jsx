import React, { Component } from 'react';

import Message from './Message.jsx'

class MessageList extends Component {
    constructor(props) {
        super(props);
        
       //don't need to store anything here so array work goes in render section
    }

    render() {

        const messageArray = this.props.messageList;
        let chatMessageList = messageArray.filter(function(msg) {
            return msg.type === "incomingMessage" 
        })

        const chatMessages = chatMessageList.map(msg => (
            <Message key={msg.id} user={msg.username} content={msg.content} /> 
        ))

        return (
            
            <main className="messages">
                {chatMessages}
            </main>
        )
    }
}

export default MessageList