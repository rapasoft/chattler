import React from "react";
import "./AddMessage.css";

const AddMessage = ({username, message, addMessage, inputChanged}) => (
    <div className="add-message">
        <input name="addMessage.username" value={username} className="username" required
               type="text" placeholder="Name" onChange={inputChanged}/>
        <input name="addMessage.message" value={message} className="message"
               type="text" placeholder="Message" onChange={inputChanged}
               onKeyDown={(e) => e.key === "Enter" ? addMessage() : ""}/>
        <button id="addButton" className="add-button" onClick={addMessage}>✉</button>
    </div>);

export default AddMessage;