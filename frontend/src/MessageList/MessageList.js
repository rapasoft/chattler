import React from "react";
import "./MessageList.css";

const MessageList = ({messages}) => (
    <div className="message-list">
        <ul>
            {messages.map((message, i) => (
                <li key={i}>
                    <div className="username">{message.username}</div>
                    <div className="message">{message.message}</div>
                </li>)
            )}
        </ul>
    </div>
);

export default MessageList;