import PubSub from "pubsub-js";
import {set} from "lodash";
import {saveMessage} from "./backend-services";

export const MESSAGE_ADDED = "message-added";
export const INPUT_CHANGED = "input-changed";
export const PROFILE_COMPLETED = "profile-completed";
export const MESSAGE_RECEIVED = "message-received";

const initialState = {
    addMessage: {
        username: '',
        message: ''
    },
    profile: {
        username: '',
        email: '',
        fullName: '',
        gender: 'Other',
        complete: false
    },
    messages: [{
        username: 'Chattler',
        message: 'Hi there! 👋 Welcome to Itera Chattler!',
        timestamp: new Date()
    }],
};

export let state = initialState;

export function addMessage() {
    saveMessage();
    state = {...state, addMessage: {...state.addMessage, message: ''}};
    const objDiv = document.getElementById("messageList");
    objDiv.scrollTop = objDiv.scrollHeight;
}

export function inputChanged(event) {
    set(state, event.target.name, event.target.value);
    PubSub.publishSync(INPUT_CHANGED);
}

export function completeProfile() {
    set(state, "profile.complete", true);
    state.addMessage.username = state.profile.username;
    PubSub.publishSync(PROFILE_COMPLETED);
}

export function updateMessages(message) {
    state = {
        ...state,
        messages: [...state.messages, message].sort((m1, m2) => {
            return m1.timestamp <= m2.timestamp;
        }),
    };
    PubSub.publish(MESSAGE_RECEIVED);
}