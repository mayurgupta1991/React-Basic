//Create a application with three routes : /home, /about, /contact-us. Create components for each route. Make /home index route.

import React from 'react'
import {Link} from 'react-router';

export default class App extends React.Component {

  render() {
    return (
      <div>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact-us">Contact Us</Link>
        </ul>
        {this.props.children}

      </div>
    );
  }
}
