//Create a login form routed at /. If user enters valid username and password,
// route to /home otherwise take user to /loginFailed which will have a link to go back to the login page.
import React from 'react'

export default class App extends React.Component {

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
