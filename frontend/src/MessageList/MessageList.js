import React from "react";
import "./MessageList.css";

const MessageList = ({messages}) => (
    <div id="messageList" className="message-list">
        <ul>
            {messages.map((message, i) => (
                <li key={i}>
                    <div className="username">{message.username} {message.timestamp}</div>
                    <div className="message">{message.message}</div>
                </li>)
            )}
        </ul>
    </div>
);

export default MessageList;