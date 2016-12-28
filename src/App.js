// Create a User Registration form with fields ( FirstName, LastName, EmailId, Contact Number, Password and Confirm password).
// Form should have a submit button. Apply form validation to incorporate following rules.


import React from 'react'


export default class App extends React.Component {
  render() {
    return (
        <UserRegisration/>
    );
  }
}

class UserRegisration extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      firstNameTxt : "",
      lastNameTxt : "",
      emailTxt : "",
      contactNumberTxt : "",
      passwdTxt : ""
    }

    this.submitForm = this.submitForm.bind(this)

  }

  validateEmail(value) {
  // regex from http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
  let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(value);
}
  submitForm(){

    if(this.refs.firstNameRef.length){

      if(this.refs.firstNameRef.value === this.refs.lastNameRef.value){
        this.setState({
          firstNameTxt : "First Name should not be equal to LastName",
          lastNameTxt : "First Name should not be equal to LastName"
        })
      }else{
        this.setState({
          firstNameTxt : "Validation Passed."
        })
      }
    } else {
      this.setState({
        firstNameRef : "Please enter FirstName."
      })
    }

    if(this.refs.lastNameRef.length){

      if(this.refs.firstNameRef.value === this.refs.lastNameRef.value){
        this.setState({
          firstNameTxt : "First Name should not be equal to LastName",
          lastNameTxt : "First Name should not be equal to LastName"
        })
      }else{
        this.setState({
          lastNameTxt : "Validation Passed."
        })
      }
    } else {
      this.setState({
        lastNameRef : "Please enter FirstName."
      })
    }

    if(this.refs.passwdRef.value === this.refs.confPasswdRef.value){
      this.setState({
        passwdTxt : "Validation Passed."
      })
    } else {
      this.setState({
        passwdTxt : "Password and Confirm password should be same."
      })
    }

    let contactNo = this.refs.contactNumberRef.value

    if(contactNo.length === 10){
      this.setState({
        contactNumberTxt : "Validation Passed."
      })
    } else {
      this.setState({
        contactNumberTxt : "Contact number should be of 10 digit numbers only."
      })
    }

    let emailId = this.refs.emailRef.value

    if(this.validateEmail(emailId)){
      this.setState({
        contactNumberTxt : "Validation Passed."
      })
    } else {
      this.setState({
        contactNumberTxt : "Email should be a valid email."
      })
    }

  }

  render(){

    return(
      <div>
        First Name : <input ref="firstNameRef" type="text" name="firstName" />
        <div id="firstNameDiv">{this.state.firstNameTxt}</div>

        Last Name : <input ref="lastNameRef" type="text" name="lastName" />
        <div id="lastNameDiv">{this.state.lastNameTxt}</div>

        Email : <input ref="emailRef" type="text" name="email" />
        <div id="emailDiv">{this.state.emailTxt}</div>

        Contact Number : <input ref="contactNumberRef" type="text" name="contactNumber" />
        <div id="contactNumberDiv">{this.state.contactNumberTxt}</div>

        Password : <input ref="passwdRef" type="text" name="password" />
        <div id="password1">{this.state.passwdTxt}</div>
        Confirm Password : <input ref="confPasswdRef" type="text" name="confirmPassword" />
        <div id="password2">{this.state.passwdTxt}</div>

        <button onClick={this.submitForm}>Submit</button>
      </div>
    )

  }

}



