// Create a page called UserPage. Use the "Header", "Users" and "Footer" components created above to
// create a complete page for the user details including header, footer and the content.


import React from 'react';
import Header from './Header';
import Footer from './Footer';


var UsersData =[
  {
    "_id": "58613042d144513fd8c03bbc",
    "isActive": true,
    "age": 38,
    "name": "Noelle Finch",
    "gender": "female",
    "email": "noellefinch@codax.com"
  },
  {
    "_id": "58613042f1ddd22998f7c02f",
    "isActive": false,
    "age": 40,
    "name": "Dominique Middleton",
    "gender": "female",
    "email": "dominiquemiddleton@codax.com"
  },
  {
    "_id": "58613042b6f22acfb34097da",
    "isActive": true,
    "age": 21,
    "name": "Beulah Hoover",
    "gender": "female",
    "email": "beulahhoover@codax.com"
  },
  {
    "_id": "5861304228670a96b75bde35",
    "isActive": false,
    "age": 26,
    "name": "Casey Acosta",
    "gender": "male",
    "email": "caseyacosta@codax.com"
  },
  {
    "_id": "586130424d77931fe3e26704",
    "isActive": true,
    "age": 36,
    "name": "Kathleen Parsons",
    "gender": "female",
    "email": "kathleenparsons@codax.com"
  },
  {
    "_id": "58613042b81ed4aea4f8bdd1",
    "isActive": true,
    "age": 32,
    "name": "Tami Morse",
    "gender": "female",
    "email": "tamimorse@codax.com"
  },
  {
    "_id": "5861304235cd4776fd7ce5a7",
    "isActive": false,
    "age": 28,
    "name": "Annette Whitaker",
    "gender": "female",
    "email": "annettewhitaker@codax.com"
  }
]
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
        <Users/>
        <Footer/>
      </div>
    );
  }
}

class Users extends React.Component {

  constructor() {
    super();

    this.state = {
      data:UsersData
    }
  }

  render() {
    return (
      <div>
        <table>
          <tbody>
          {this.state.data.map((person, i) => <UserRow key = {i} data = {person} />)}
          </tbody>
        </table>
      </div>
    );
  }
}

class UserRow extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.data._id}</td>
        <td>{this.props.data.isActive.toString()}</td>
        <td>{this.props.data.age}</td>
        <td>{this.props.data.name}</td>
        <td>{this.props.data.gender}</td>
        <td>{this.props.data.email}</td>
      </tr>
    );
  }
}

