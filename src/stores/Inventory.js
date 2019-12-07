import { observable, action } from 'mobx';
import { Items } from './Items';

export class Inventory {
  @observable items = [];
  @action addItem = (name, price, quantity) => {
    console.log(name)
    if (this.items.find(i => i.name === name)) {
      let itemIndex = this.items.findIndex(i => i.name === name);
      this.items[itemIndex].quantity++;
    } else {
      let item = new Items(name);
      this.items.push(item);
    }
  };
  @action buyItem = name => {
    if (this.items.find(i => i.quantity == 0)) {
      let itemIndex = this.items.findIndex(i => i.name === name);
      this.items.splice(itemIndex, 1);
    } else {
      let itemIndex = this.items.findIndex(i => i.name === name);
      this.items[itemIndex].quantity--;
    }
  };
  @action changePrice = (name, price) => {
    let itemIndex = this.items.findIndex(i => i.name === name);
    
    this.items[itemIndex].price = price;
  };
}
