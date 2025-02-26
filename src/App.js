/* eslint-disable quotes */
import React, { Component } from "react";
import "./App.css";
import { observer,inject } from "mobx-react";
import Market from "./components/Market";
@inject("inventory","items")
@observer
class App extends Component {
  render() {
    return (
      <div className="App">
        <Market />
      </div>
    );
  }
}

export default App;
