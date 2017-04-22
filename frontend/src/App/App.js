import React from "react";
import "./App.css";
import {
    addMessage,
    completeProfile,
    INPUT_CHANGED,
    inputChanged,
    MESSAGE_ADDED,
    MESSAGE_RECEIVED,
    PROFILE_COMPLETED,
    state,
    updateMessages
} from "../logic";
import AddMessage from "../AddMessage/AddMessage";
import * as PubSub from "pubsub-js";
import MessageList from "../MessageList/MessageList";
import CreateProfile from "../CreateProfile/CreateProfile";

export default class App extends React.Component {

    componentDidMount() {
        this.subscriptions = [
            PubSub.subscribe(INPUT_CHANGED, () => this.forceUpdate()),
            PubSub.subscribe(MESSAGE_RECEIVED, () => this.forceUpdate()),
            PubSub.subscribe(PROFILE_COMPLETED, () => this.forceUpdate()),
            PubSub.subscribe(MESSAGE_ADDED, (event, message) => updateMessages(message))
        ];
    };

    componentWillUnmount() {
        this.subscriptions.forEach((subscription) => PubSub.unsubscribe(subscription));
    };

    render() {
        return (<div className="App">
            <div className="App-header">
                <span className="App-intro">Itera Chattler</span>
            </div>
            <div>
                {state.profile.complete && <AddMessage
                    username={state.addMessage.username}
                    message={state.addMessage.message}
                    addMessage={addMessage}
                    inputChanged={inputChanged}
                />}
                {state.profile.complete && <MessageList messages={state.messages}/>}
                {!state.profile.complete && <CreateProfile
                    username={state.profile.username}
                    email={state.profile.email}
                    fullName={state.profile.fullName}
                    gender={state.profile.gender}
                    createProfile={completeProfile}
                    inputChanged={inputChanged}
                />}

            </div>
        </div>);
    }
}