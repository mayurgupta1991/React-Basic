// Create a stop watch component. called StopWatch
// This component should have a button and a timer inside it.
// On click of the button, the timer should start and should display the time passed (since the click of the button) every second.
// On click of the button again, the timer should stop and the displayed time should freeze.


import React from 'react';
export default class App extends React.Component {
  render() {
    return (
      <StopWatch/>
    );
  }
}
class StopWatch extends React.Component {
  constructor() {
    super();
    this.state = {
      time:0,
      start:true,
      buttonText:"Start Timer"
    };

    this.setTimer = this.setTimer.bind(this);
  }
  addTime(){
    this.setState({time: this.state.time + 1});
  }
  setTimer(){
    this.setState({start: !(this.state.start)});

    if(this.state.start){
      this.setState({buttonText: "Stop Timer"});
      this.StartTimer = setInterval(
        () => this.addTime(),
        1000
      );
    }else{
      this.setState({buttonText: "Start Timer"});
      clearInterval(this.StartTimer);
    }
  }
  render() {
    return (
      <div>
        <div>Time is {this.state.time}</div>
        <button onClick = {this.setTimer}>{this.state.buttonText}</button>
      </div>
    );
  }
}




