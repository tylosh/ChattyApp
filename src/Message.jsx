import React, { Component } from 'react';

class Message extends Component {
    
    handleMessage = () => {
        switch(this.props.type) {
            case "incomingMessage":
                return (
                    <div className="message">
                        <span className="message-username">{this.props.user}</span>
                        <span className="message-content">{this.props.content}</span>
                    </div>
                )
                break;
            case "incomingNotification":
                return (
                    <div className="message system">
                        {this.props.content}
                    </div>
                )
                break;    
        }

    }
    
    render() {
        return (
            <div>
                {this.handleMessage()}    
            </div>
        )
    }
}

export default Message