// Create a component UserDetail that takes user object as a prop and displays the user info in a table.
//Apply prop validation on userDetail component. prop user in UserDetail should be an object with key name (string), age (number), avatar (string).

import React from 'react';
let sample_user_data  = [
  {name: 'John', age: 25, avatar: 'https://randomuser.me/api/portraits/men/15.jpg'},
  {name: 'Joe', age: 35, avatar: 'https://randomuser.me/api/portraits/men/13.jpg'},
  {name: 'Andrei', age: 45, avatar: 'https://randomuser.me/api/portraits/men/10.jpg'},
  {name: 'Ted', age: 29, avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
  {name: 'Ben', age: 30, avatar:'https://randomuser.me/api/portraits/men/2.jpg' }
];
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users:sample_user_data
    };
  }
  render() {
    return (
      <table>
        <tbody>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Avatar</th>
        </tr>
        {this.state.users.map((person, i) => <UserDetail key = {i} user = {person} />)}
        </tbody>
      </table>
    );
  }
}
class UserDetail extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.user.name}</td>
        <td>{this.props.user.age}</td>
        <td><img src={this.props.user.avatar}/></td>
      </tr>
    );
  }
}

UserDetail.propTypes = {
  user: React.PropTypes.shape({
    name:React.PropTypes.string,
    age: React.PropTypes.number,
    avatar: React.PropTypes.string
  })
};





