import SockJs from "sockjs-client";
import Stomp from "stompjs";
import * as PubSub from "pubsub-js";
import {MESSAGE_ADDED} from "./logic";
import {homepage} from "../package.json";

const hostname = (process.env.NODE_ENV === "production" ? homepage : "http://localhost:8080");

function createSocketConnection() {
    const socket = new SockJs(hostname + "/websocket");
    const stompClient = Stomp.over(socket);
    stompClient.debug = null;
    console.log('createSocketConnection client:', stompClient);
    console.log('createSocketConnection socket:', socket);
    return {socket, stompClient};
}

function createSocketChannel({socket, stompClient}) {
    stompClient.connect({}, (frame) => {
        stompClient.subscribe('/chat/message', (message) => {
            PubSub.publish(MESSAGE_ADDED, JSON.parse(message.body));
        });
    });

    socket.onclose = function () {
        console.log('socket.onclose => close');
    };

    const unsubscribe = () => {
        stompClient.disconnect();
        socket.close();
    };

    return unsubscribe;
}

export {createSocketConnection, createSocketChannel};