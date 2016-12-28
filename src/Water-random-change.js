// Create a component Water having a state variable as temperature.
// Render Water is in solid state if temperature <= 0, Water is in a liquid state if temperature > 0 and < 100,
// Water in Gas state if temperature >= 100.
// Change the state of the component from react extension in the browser.

//Add ability to above component to change it's state ( temperature ) every 5 seconds with some random value between -10 to 110.


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

  componentDidMount() {
    this.changeTemperature = setInterval(
      () => this.changeTempRandom(),
      5000
    );
  }

  componentWillUnmount() {
    clearInterval(this.changeTemperature);
  }

  setTemperature(){
    let result = "";
    let temp =this.state.temperature;
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
  changeTempRandom(){
    this.setState({
      temperature: Math.floor((Math.random() * 120) -10)
    });
  }

  render() {
    return (
      <div>
        Water is in {this.setTemperature()}
      </div>
    );
  }
}




