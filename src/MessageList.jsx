import React, { Component } from 'react';

import Message from './Message.jsx'

class MessageList extends Component {
    //should this be a function?
    render() {
        const messageArray = this.props.messageList;
        const chatMessages = messageArray.map(msg => (
            <Message key={msg.id} user={msg.username} content={msg.content} type={msg.type} /> 
        ))

        return (
            <main className="messages">
                {chatMessages}
            </main>
        )
    }
}

export default MessageList