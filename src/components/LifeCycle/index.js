import React, { Component } from 'react';
import Button from '../Button';
import Container from '../Container';
import Game from '../Game';

export default class LifeCyleMethods extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0,
            toggle: true
        };
        this.addCounter = this.addCounter.bind(this);
        this.reduceCounter = this.reduceCounter.bind(this);
        this.toggleGame = this.toggleGame.bind(this);
    }

    componentWillMount() {
      console.log('LifeCyleMethods Component will mount');
    }

    componentDidMount() {
      // use setTimeout or setInterval here
      console.log('LifeCyleMethods Component did mount');
    }

    shouldComponentUpdate() {
      console.log('Inside LifeCyleMethods should Component Update');
      return true;
    }

    componentWillUpdate() {
      console.log('Inside LifeCyleMethods Component will Update');
    }

    componentDidUpdate() {
      console.log('Inside LifeCyleMethods Component did Update');
    }

    addCounter() {
      this.setState({counter : this.state.counter + 1});
    }

    reduceCounter() {
      this.setState({counter : this.state.counter - 1});
    }

    toggleGame() {
      this.setState({toggle : !this.state.toggle});
    }

    render() {
        console.log('Inside LifeCyleMethods render');
            return (
                <div>
                    { this.state.toggle ?
                        (
                            <div>
                                <Button eventHandler={this.addCounter} description ={'Increment'} />
                                <Button eventHandler={this.reduceCounter} description ={'Decrement'} />
                                <div>
                                  The counter value is
                                </div>
                                <Container description ={this.state.counter} />
                            </div>
                        ) : <Game />
                    }
                  <Button eventHandler={this.toggleGame} description ={'Toggle'} />
                </div>
            );
    }

}

