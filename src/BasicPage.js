//Create a component called BasicPage. This component should internally use 3 components namely "Header", "Content" and "Footer".
// The "Header" component should render the header of the page
// The "Footer" component should render the footer of the page
// The "Content" should render some dummy text
// Use the above mentioned 3 components to create a basic page
 import React from 'react';
 import Header from './Header';
 import Content from './Content';
 import Footer from './Footer';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <BasicPage/>
      </div>
    );
  }
}

class BasicPage extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Content/>
        <Footer/>
      </div>
    );
  }
}

