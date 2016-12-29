// Create components Cart, Item and CartTotal. Cart component displays list of Items and CartTotal.
// (set items in the state of Cart)
// sample items = [ {name: 'item1', qty:2, price: 30}, {name: 'item2', qty:5, price: 10}, {name: 'item3', qty:7, price: 120}, ]


import React from 'react';
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [
        {name: 'item1', qty: 2, price: 30},
        {name: 'item2', qty: 5, price: 10},
        {name: 'item3', qty: 7, price: 120}
      ]
    };
  }

  render() {
    return (
      <div>
        <Item items={this.state.items}/>
        <CartTotal items={this.state.items}/>
      </div>
    );
  }
}

class Item extends React.Component {
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
          </tr>
        })
        }
        </tbody>
      </table>
    );
  }
}

Item.propTypes = {
  items: React.PropTypes.shape({
    map:React.PropTypes.func
  })
};

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





