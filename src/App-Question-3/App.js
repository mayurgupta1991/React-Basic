//Extend Cart application (from Day2) to have functionality to add, remove, increase quantity and decrease quantity.

import React from 'react';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [
        {name: 'item1', qty: 2, price: 30},
        {name: 'item2', qty: 5, price: 10},
        {name: 'item3', qty: 7, price: 120}
      ],
      input:''
    };
    this.AddItem = this.AddItem.bind(this);
    this.addItemQuantity = this.addItemQuantity.bind(this);
    this.decItemQuantity = this.decItemQuantity.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  AddItem(){
    let val = this.state.input;
    let val_item = val.split("-");
    let item_list = this.state.items;
    let ele ={qty: 1};
    ele.name=val_item[0];
    ele.price=val_item[1];
    if(val){
      item_list.push(ele);
      this.setState({items: item_list,input:''});
    }
  }

  addItemQuantity(index){
    let item_list = this.state.items;
    item_list[index].qty++;
    this.setState({items: item_list});
  }

  decItemQuantity(index){
    let item_list = this.state.items;
    if(item_list[index].qty > 1){
      item_list[index].qty--;
    }
    this.setState({items: item_list});
  }
  removeItem(index){
    let item_list = this.state.items;
    item_list.splice(index,1);
    this.setState({items: item_list});
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.input} name="input" onChange={e => this.setState({input:e.target.value})}/>
        <button onClick={this.AddItem}>Submit</button>

        <Item items={this.state.items} addQty = {this.addItemQuantity} decQty= {this.decItemQuantity}  removeItem= {this.removeItem}/>
        <CartTotal items={this.state.items}/>
      </div>
    );
  }
}

class Item extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <table>
        <tbody>
        {
          this.props.items.map((item, index) => {
          return <tr key={index}>
            <td>{item.name}</td>
            <td>{item.qty}</td>
            <td>{item.price}</td>
            <td>
              <button onClick={() => this.props.addQty(index)}>Increase</button>
            </td>
            <td>
              <button onClick={() => this.props.decQty(index)}>Decrease</button>
            </td>
            <td>
              <button onClick={() => this.props.removeItem(index)}>Remove</button>
            </td>
          </tr>
        })
        }
        </tbody>
      </table>
    );
  }
}

class CartTotal extends React.Component {

  render() {
    let cartTotal = this.props.items.reduce((total, row) => (total + (row.qty * row.price) ), 0);
    return (
      <div>
        your total cart value is {cartTotal}
      </div>
    );
  }
}
