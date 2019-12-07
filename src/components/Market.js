/* eslint-disable quotes */
import React, { Component } from "react";
import { observer } from "mobx-react";
import Item from "./Item";
@observer
class Market extends Component {
  constructor() {
    super();
    this.state = { newItem: "" };
  }

  addItem = async e => {
    if (e.key === "Enter") {
      await this.setState({
        newItem: e.target.value
      });
      this.props.agora.addItem(this.state.newItem);
    }
  };
  render() {
    const agora = this.props.agora;
    return (
      <div>
        <input type="text" onKeyPress={this.addItem} />
        {agora.items.map((i, ind) => (
          <Item key={ind} item={i} agora={agora} />
        ))}
      </div>
    );
  }
}
export default Market;
