import PubSub from "pubsub-js";
import {set} from "lodash";
import {saveMessage} from "./backend-services";

export const MESSAGE_ADDED = "message-added";
export const INPUT_CHANGED = "input-changed";
export const MESSAGE_RECEIVED = "message-received";

const initialState = {
    addMessage: {
        username: '',
        message: ''
    },
    messages: [{username: 'Chattler', message: 'Hi there! 👋 Welcome to Itera Chattler!'}],
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

export function updateMessages(message) {
    state = {
        ...state,
        messages: [...state.messages, message],
    };
    PubSub.publish(MESSAGE_RECEIVED);
}