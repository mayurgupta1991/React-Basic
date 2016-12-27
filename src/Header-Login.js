// Create a component called "Header" which either displays the current logged in username (if a user is logged in) or a
// "Login" button (if no user is logged in) in the navbar.
// Use a hardcoded global variable "isUserLoggedIn" to check if user is logged in or not.

import React from 'react'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    let isUserLoggedIn = true;
    let displayname = isUserLoggedIn ?  <span>hie user</span> : <button>log in</button>;

    return (
      displayname
    );
  }
}






