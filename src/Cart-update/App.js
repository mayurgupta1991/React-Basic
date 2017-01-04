import React from 'react';
import { connect } from 'react-redux';

import {
    addQuantity,
    reduceQuantity,
    delItem
} from './actions';

class App extends React.Component {
  constructor(props) {
    super(props);
      this.addItemQuantity = this.addItemQuantity.bind(this);
      this.decItemQuantity = this.decItemQuantity.bind(this);
      this.removeItem = this.removeItem.bind(this);
  }

    addItemQuantity(index){
        this.props.addQuantity(index);
    }

    decItemQuantity(index){
        this.props.reduceQuantity(index);
    }
    removeItem(index){
        this.props.delItem(index);
    }


  render() {
    return (
      <div>
      <Item items={this.props.date.items} addQty = {this.addItemQuantity} decQty= {this.decItemQuantity}  removeItem= {this.removeItem}/>
      <CartTotal items={this.props.date.items}/>
      </div>
    )
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


var AppComponent = connect((state) => {
    return state;
}, (dispatch) => {
    return {
        addQuantity(add) {
            dispatch(addQuantity(add));
        },reduceQuantity (reduce) {
            dispatch(reduceQuantity(reduce));
        },delItem(del){
            dispatch(delItem(del));
        }
    }
})(App);

export default AppComponent;
