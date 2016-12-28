// Create components Cart, Item and CartTotal. Cart component displays list of Items and CartTotal.
// (set items in the state of Cart)
// sample items = [ {name: 'item1', qty:2, price: 30}, {name: 'item2', qty:5, price: 10}, {name: 'item3', qty:7, price: 120}, ]


import React from 'react';
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      item:[ {name: 'item1', qty:2, price: 30}, {name: 'item2', qty:5, price: 10}, {name: 'item3', qty:7, price: 120}],
      CartTotal:0
    };
  }

  render() {

    return (
      <div>

        <table>
          <tbody>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>

          {this.state.item.map((item, i) => {
            this.state.CartTotal += (item.qty*item.price);

            return <tr key={i}>
              <td>{item.name}</td>
              <td>{item.qty}</td>
              <td>{item.price}</td>
            </tr>
          })}


          </tbody>
        </table>

        <div>
          CartTotal = {this.state.CartTotal}
        </div>

      </div>
    );
  }
}





