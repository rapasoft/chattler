import {state} from "./logic";
import {homepage} from "../package.json";

const hostname = (process.env.NODE_ENV === "production" ? homepage : "http://localhost:8080");

export function saveMessage() {
    let body = JSON.stringify({...state.addMessage, timestamp: new Date()});
    return fetch(hostname + "/message", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body,
        credentials: 'include'
    }).catch((error) => {
            return {
                message: "Oops, there's been an error while sending your message.",
                username: "Chattler"
            }
        }
    )
}