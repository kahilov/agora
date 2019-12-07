/* eslint-disable quotes */
import React, { Component } from "react";
import { observer } from "mobx-react";

@observer
class Item extends Component {
    buyItem = e => {
      this.props.agora.buyItem(e.target.name);
    };
    editItemPrice = e => {
      let name = e.target.id;
      let price = prompt("Please Input New Price");
      this.props.agora.changePrice(name, price);
    };
  render() {
    const item = this.props.item;
    return (
      <div className="">
        {" "}
        <ul>
          <li id = {item.name} onDoubleClick={this.editItemPrice}>
            {item.quantity} {item.name} available at ${item.price} per item
            <button name={item.name} onClick={this.buyItem}>
              Buy
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

export default Item;
