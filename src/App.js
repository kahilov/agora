/* eslint-disable quotes */
import React, { Component } from "react";
import "./App.css";
import { observer } from "mobx-react";
import Market from "./components/Market";

@observer
class App extends Component {
  render() {
    return (
      <div className="App">
        <Market agora={this.props.agora} />
      </div>
    );
  }
}

export default App;
