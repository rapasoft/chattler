import React from "react";
import "./MessageList.css";
import moment from "moment";

const MessageList = ({messages}) => (
    <div id="messageList" className="message-list">
        <ul>
            {messages.map((message, i) => (
                <li key={i}>
                    <div className="username">
                        <span className="timestamp">{moment(message.timestamp).format("HH:mm")}</span>
                        <span>{message.username}</span>
                    </div>
                    <div className="message">{message.message}</div>
                </li>)
            )}
        </ul>
    </div>
);

export default MessageList;