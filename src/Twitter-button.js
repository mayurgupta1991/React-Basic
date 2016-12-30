//Make Twitter Tweet like plugin, where Tweet button style should change dynamically according to state.
// For eg;- Tweet button should be not clickable if user is submitting blank tweet or he exceeds maximum character limit.
// Once the user types,Tweet button should be visible.

import React from 'react';

export default class App extends React.Component {
  render() {
    return (
            <CustomInput/>
    );
  }
}
class CustomInput extends React.Component {
  constructor() {
    super();
    this.state = {
      input:"",
      disabled:true,
      visibility :0.2
    };
      this.setInput = this.setInput.bind(this);
  }
    setInput(e){
        this.setState({input: e.target.value});
        let initialState=e.target.value;
        console.log(initialState.length);

        if(initialState.length > 0 && initialState.length < 150){
            this.setState({disabled: false,visibility:1});
        }else{
            this.setState({disabled: true,visibility:0.2});
        }
    }
  render() {
      const textStyle={
          background:"#FC8B59",
          opacity:this.state.visibility,
          color:"#ffffff"
      }
    return (
        <div>
            <div>
                <textarea rows="4" cols="50" value={this.state.input} onChange={this.setInput}/>
                <button style={textStyle} type="button" disabled={this.state.disabled}>Tweet</button>
            </div>
        </div>
  );
  }
}


