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
    messages: [{username: 'Chattler', message: 'Welcome to your friendly neighbourhood chat! 👋'}],
};

export let state = initialState;

export function addMessage() {
    saveMessage().then(() => {
        state = {...state, addMessage: {...state.addMessage, message: ''}};
    })
}

export function inputChanged(event) {
    set(state, event.target.name, event.target.value);
    PubSub.publish(INPUT_CHANGED);
}

export function updateMessages(message) {
    state = {
        ...state,
        messages: [...state.messages, message],
    };
    PubSub.publish(MESSAGE_RECEIVED);
}