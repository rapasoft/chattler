import {state} from "./logic";

const hostname = "http://localhost:8080";

export function saveMessage() {
    let body = JSON.stringify({...state.addMessage, timestamp: new Date()});
    return fetch(hostname + "/message", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body,
        credentials: 'include'
    })
}