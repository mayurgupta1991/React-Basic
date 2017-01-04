import React from 'react';
import { connect } from 'react-redux';

import {
    setDate,
    setSECONDS,
    setMINUTES,
    setHOURS,
    setAMPM
} from './actions';

class App extends React.Component {
  constructor(props) {
    super(props);

      this.initDate = this.initDate.bind(this);
      this.changeSecs = this.changeSecs.bind(this);
      this.changeMins = this.changeMins.bind(this);
      this.changeHours = this.changeHours.bind(this);
      this.changeAMPM = this.changeAMPM.bind(this);
  }
    componentDidMount() {
        this.initDate();
        this.updateSeconds = setInterval(
            () => this.changeSecs(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.updateSeconds);
    }

    initDate(){
        let date = new Date();
        let newD ={};
        newD.hours = date.getHours();
        newD.minutes = date.getMinutes();
        newD.seconds =date.getSeconds();
        newD.ampm = newD.hours >= 12 ? 'pm' : 'am';
        newD.hours = newD.hours % 12;
        newD.hours = newD.hours ? newD.hours : 12;
        this.props.setDate(newD);
    }

    changeSecs(){
        let sec = (this.props.date.seconds + 1)% 60;
        if(!sec){
            this.changeMins();
        }
        this.props.setSECONDS(sec);
    }
    changeMins(){
        let min = (this.props.date.minutes + 1)% 60;
        if(!min){
            this.changeHours();
        }
        this.props.setMINUTES(min);
    }

    changeHours() {
        let hours = (this.props.date.hours + 1) % 12;
        hours = hours ? hours : 12;
        if (hours === 12) {
            this.changeAMPM();
        }
        this.props.setHOURS(hours);
    }


    changeAMPM(){
            let ampm = this.props.date.ampm;
            ampm = "am" ? "pm" : "am";
            this.props.setAMPM(ampm);
    }

  render() {
    return (
      <div>
        <h1>Timer {this.props.date.hours}: {this.props.date.minutes}:{this.props.date.seconds} {this.props.date.ampm}</h1>
      </div>
    )
  }
}

var AppComponent = connect((state) => {
    return state;
}, (dispatch) => {
    return {
        setDate(newD) {
            dispatch(setDate(newD));
        },setSECONDS (sec) {
            dispatch(setSECONDS(sec));
        },setMINUTES(min){
            dispatch(setMINUTES(min));
        },setHOURS(hours){
            dispatch(setHOURS(hours));
        },setAMPM(ampm){
            dispatch(setAMPM(ampm));
        }
    }
})(App);

export default AppComponent;
