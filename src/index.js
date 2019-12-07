/* eslint-disable quotes */
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Items } from "../src/stores/Items";
import { Inventory } from "../src/stores/Inventory";

let potatoes = new Items("Potatoes");
let inventory = new Inventory();
inventory.items.push(potatoes);

ReactDOM.render(<App agora={inventory} />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
