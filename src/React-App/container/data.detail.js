/**
 * Created by ttn on 5/1/17.
 */

import React, {Component} from 'react'
import {connect} from 'react-redux'
import {browserHistory} from 'react-router'

import {updateData} from '../actions'

class DataDetail extends Component {

  constructor(props){
    super(props)

    this.state = {
      id: "",
      firstName: "",
      lastName: "",
      email: "",
      company: ""
    }

    this.handleChange = this.handleChange.bind(this)
    this.submitData = this.submitData.bind(this)
    this.goHome = this.goHome.bind(this)

  }

  handleChange(e){
    let initialState = this.state
    initialState[e.target.name] = e.target.value
    this.setState(initialState)
  }

  submitData(){
    let newData = {
      id: this.state.id,
      first_name: this.state.firstName,
      last_name: this.state.lastName,
      email: this.state.email,
      company: this.state.company

    }

    this.props.dispatch(updateData(newData))

    browserHistory.push("/home")

  }

  goHome(){
    browserHistory.push("/home")
  }

  componentDidMount(){

    const idx = this.props.params.id

    this.props.data.map((row, index) =>{

        if(row.id === idx){
          this.setState({
            id: idx,
            firstName: row.first_name,
            lastName: row.last_name,
            email: row.email,
            company: row.company
          })
        }
    })
  }

  componentWillUnmount(){
    this.setState({
      id: "",
      firstName: "",
      lastName: "",
      email: "",
      company: ""
    })
  }

  render(){

    console.log("inside data.detail")

    return(
      <div>
        User Details below -

        <div>
          <br/>
          <table>
            <tbody>
              <tr>
                <td>First Name</td>
                <td><input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange}/></td>
              </tr>
              <tr>
                <td>Last Name</td>
                <td><input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange}/></td>
              </tr>
              <tr>
                <td>Email </td>
                <td><input type="text" name="email" value={this.state.email} onChange={this.handleChange}/></td>
              </tr>
              <tr>
                <td>Company</td>
                <td><input type="text" name="company" value={this.state.company} onChange={this.handleChange}/></td>
              </tr>
              <tr><td><br/></td></tr>
              <tr>
                <td><button onClick={this.submitData}>Click to Submit Changes</button></td> <td><button onClick={this.goHome}>Click for Home</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }

}

const DataDetailComponent = connect((state)=>{
  return state;
})(DataDetail)

export default DataDetailComponent
