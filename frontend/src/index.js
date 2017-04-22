import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App";
import "./index.css";
import {createSocketChannel, createSocketConnection} from "./sockets";

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

createSocketChannel(createSocketConnection());
