import React, { Component } from 'react';
import { calculateWinner } from './calculate';
import Square from './Sqaure';

const statusStyle = {color: '#5bae8a'};
const rowStyle = {
  color: '#e14e1d',
  float: 'left',
  width: '100%'
};

export default class Game extends Component {
    constructor() {
        super();
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true
        };
        this.renderSquare = this.renderSquare.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.resetGame = this.resetGame.bind(this);
    }

    handleClick(i) {
        const squares = [...this.state.squares];
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            squares,
            xIsNext: !this.state.xIsNext
        });
    }

  resetGame() {
    this.setState({
      squares: Array(9).fill(null),
      xIsNext: true
    });
  }

    renderSquare(i) {
        return (
            <Square
                value={this.state.squares[i]}
                changeValue={() => this.handleClick(i)}
            />
        );
    }
    render() {
        const winner = calculateWinner(this.state.squares);
        console.log(this.state.squares);
        let status;
        if (winner) {
            status = `Winner: ${winner}`;
        } else {
            status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;
        }

        return (
            <div>
                <div style={statusStyle}>
                    {status}
                </div>
                <button onClick={this.resetGame}>
                  Reset Game
                </button>
                <div style={rowStyle}>
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div style={rowStyle}>
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div style={rowStyle}>
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

