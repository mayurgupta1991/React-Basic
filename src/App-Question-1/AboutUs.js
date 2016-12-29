
import React from 'react';
import {browserHistory} from 'react-router';

export default class AboutUs extends React.Component {

  goToHome(){
    browserHistory.push('/home')
  }

  render() {
    return (
      <div>
        AboutUs
        <button onClick={this.goToHome}>Goto Home</button>
      </div>
    );
  }
}
