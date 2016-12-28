// Create a User Registration form with fields ( FirstName, LastName, EmailId, Contact Number, Password and Confirm password).
// Form should have a submit button. Apply form validation to incorporate following rules.


import React from 'react';
export default class App extends React.Component {
  render() {
    return (
      <Registration/>
    );
  }
}
class Registration extends React.Component {
  constructor() {
    super();
    this.state = {
      text: {
        FirstName:"",
        LastName:"",
        EmailId:"",
        Contact:"",
        Password:"",
        ConfirmPassword:""
      },validations: {
        isFirstNameValid:true,
        isFirstNameLastName:true,
        isLastNameValid:true,
        isEmailIdValid:true,
        isContactValid:true,
        isPasswordValid:true
      }
    };

    this.setInput = this.setInput.bind(this);
  }

  setInput(e){
    let initialState=this.state.text;
    initialState[e.target.name]=e.target.value;
    this.setState(initialState);
  }


  render() {
    return (
        <div>

          FirstName:  <InputEle type="text" value ={this.state.text.FirstName} name ="FirstName"  onChange = {this.setInput} />
          <div>
            {this.state.validations.isFirstNameValid} ?  <span></span> : <span>Please enter First Name</span>
          </div>
          <div>
            {this.state.validations.isFirstNameLastName} ?  <span></span> : <span>First Name should not be equal to LastName</span>
          </div>


          LastName: <InputEle type="text" value ={this.state.text.LastName}  name ="LastName" onChange = {this.setInput} />
          <div>
            {this.state.validations.isLastNameValid} ?  <span></span> : <span>Please enter Last Name</span>
          </div>

          EmailId: <InputEle type="text" value ={this.state.text.EmailId} name ="EmailId"  onChange = {this.setInput} />
          <div>
            {this.state.validations.isEmailIdValid} ?  <span></span> : <span>Please enter Valid Email ID</span>
          </div>

          Contact: <InputEle type="text" value ={this.state.text.Contact}  name ="Contact" onChange = {this.setInput} />

          <div>
            {this.state.validations.isContactValid} ?  <span></span> : <span>Contact number should be of 10 digit numbers only.</span>
          </div>
          Password: <InputEle type="password" value ={this.state.text.Password} name ="Password"  onChange = {this.setInput} />
          Confirm Password: <InputEle type="password" value ={this.state.text.ConfirmPassword} name ="ConfirmPassword"  onChange = {this.setInput} />

          <div>
            {this.state.validations.isPasswordValid} ?  <span></span> : <span>Password and Confirm Password should be same.</span>
          </div>
        </div>
    );
  }
}

class InputEle extends React.Component{
  render() {
    return (
      <div>
        <input type = {this.props.type} name={this.props.name} value = {this.props.value} onChange = {this.props.onChange} />
      </div>
    );
  }
}



