import React from "react";
import {addMessage, inputChanged} from "../logic";
import "./AddMessage.css";

const AddMessage = ({username, message}) => (
    <div className="add-message">
        <input name="addMessage.username" value={username} className="username" type="text" placeholder="Name"
               onChange={inputChanged}/>
        <input name="addMessage.message" value={message} className="message" type="text" placeholder="Message"
               onChange={inputChanged}/>
        <button id="addButton" className="add-button" onClick={addMessage}>✉</button>
    </div>);

export default AddMessage;