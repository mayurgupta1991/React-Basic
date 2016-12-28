// Create a component Water having a state variable as temperature.
// Render Water is in solid state if temperature <= 0, Water is in a liquid state if temperature > 0 and < 100,
// Water in Gas state if temperature >= 100.
// Change the state of the component from react extension in the browser.
import React from 'react';
export default class App extends React.Component {
  render() {
    return (
      <Water/>
    );
  }
}
class Water extends React.Component {
  constructor() {
    super();
    this.state = {
      temperature:33
    };
  }
  setTemperature(temp){
    let result = "";
    if(temp <= 0){
      result = "Solid state";
    }else if (temp > 0 && temp < 100) {
      result = "Liquid state";
    } else if (temp >= 100) {
      result = "Gas state";
    }
    return(
      <span>{result}</span>
    );
  }
  render() {
    return (
      <div>
        Water is in {this.setTemperature(this.state.temperature)}
      </div>
    );
  }
}




