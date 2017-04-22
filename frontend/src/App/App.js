import React from "react";
import "./App.css";
import {INPUT_CHANGED, MESSAGE_ADDED, MESSAGE_RECEIVED, state, updateMessages} from "../logic";
import AddMessage from "../AddMessage/AddMessage";
import * as PubSub from "pubsub-js";
import MessageList from "../MessageList/MessageList";

export default class App extends React.Component {

    componentDidMount() {
        this.subscriptions = [
            PubSub.subscribe(INPUT_CHANGED, () => this.forceUpdate()),
            PubSub.subscribe(MESSAGE_RECEIVED, () => this.forceUpdate()),
            PubSub.subscribe(MESSAGE_ADDED, (event, message) => updateMessages(message))
        ];
    };

    componentWillUnmount() {
        this.subscriptions.forEach((subscription) => PubSub.unsubscribe(subscription));
    };

    render() {
        return (<div className="App">
            <div className="App-header">
                <span className="App-intro">Chattler</span>
            </div>
            <div>
                <AddMessage name={state.addMessage.name} message={state.addMessage.message}/>
                <MessageList messages={state.messages}/>
            </div>
        </div>);
    }
}