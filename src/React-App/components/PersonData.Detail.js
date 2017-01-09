import React, {Component} from 'react';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';

import {
    updatePerson,
    createPerson
} from '../actions';

class PersonData extends Component {

  constructor(props){
    super(props)

    this.state = {
      id: "",
      name: "",
      lname: "",
      email: "",
      job_title: ""
    }

    this.handleChange = this.handleChange.bind(this)
    this.submitData = this.submitData.bind(this)
    this.goHome = this.goHome.bind(this)
  }

  handleChange(e){
    let initialState = this.state;
    initialState[e.target.name] = e.target.value;
    this.setState(initialState);
  }

  submitData(){
    let newData = {
      id: this.state.id,
      name: this.state.name,
      lname: this.state.lname,
      email: this.state.email,
      job_title: this.state.job_title

    }

    if(this.props.location.pathname =="/person/CreatePerson"){
      this.props.dispatch(createPerson(newData))
    }else{
      this.props.dispatch(updatePerson(newData))
    }
     browserHistory.push("/home")
  }

  goHome(){
    browserHistory.push("/home")
  }

  componentDidMount(){

    if(this.props.location.pathname !=="/person/CreatePerson"){
          const idx = this.props.params.id;
          this.props.personData.persons.map((row, index) =>{
              if(row.id === idx){
                  this.setState({
                      id: idx,
                      name: row.name,
                      lname: row.lname,
                      email: row.email,
                      job_title: row.job_title
                  })
              }
          });
      }
  }

  render(){
    return(
      <div>
        Person Details below

        <div>
          <br/>
          <table>
            <tbody>
              <tr>
                <td>First Name</td>
                <td><input type="text" name="name" value={this.state.name} onChange={this.handleChange}/></td>
              </tr>
              <tr>
                <td>Last Name</td>
                <td><input type="text" name="lname" value={this.state.lname} onChange={this.handleChange}/></td>
              </tr>
              <tr>
                <td>Email </td>
                <td><input type="text" name="email" value={this.state.email} onChange={this.handleChange}/></td>
              </tr>
              <tr>
                <td>Company</td>
                <td><input type="text" name="job_title" value={this.state.job_title} onChange={this.handleChange}/></td>
              </tr>
              <tr><td><br/></td></tr>
              <tr>
                <td><button onClick={this.submitData}>Click to Submit Changes</button></td>
                <td><button onClick={this.goHome}>Click for Home</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }

}

const PersonDataComponent = connect((state)=>{
  return state;
})(PersonData)

export default PersonDataComponent
