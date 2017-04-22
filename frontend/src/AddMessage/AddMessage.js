import React from "react";
import "./AddMessage.css";

const AddMessage = ({username, message, addMessage, inputChanged}) => (
    <div className="add-message">
        <input className="username" value={username} onChange={inputChanged}
               name="addMessage.username" placeholder="Username"/>
        <input name="addMessage.message" value={message} className="message"
               type="text" placeholder="Message" onChange={inputChanged}
               onKeyDown={(e) => e.key === "Enter" ? addMessage() : ""}/>
        <button id="addButton" className="add-button" onClick={addMessage}>✉</button>
    </div>);

export default AddMessage;