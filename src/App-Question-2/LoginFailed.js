
import React from 'react';
import {browserHistory} from 'react-router';

export default class LoginFailed extends React.Component {

  goToHome(){
    browserHistory.push('/')
  }

  render() {
    return (
      <div>
        LoginFailed, Please go to
        <button onClick={this.goToHome}>Goto Home</button>
      </div>
    );
  }
}
