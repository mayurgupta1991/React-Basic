import React from 'react'
import {connect} from 'react-redux'
import {browserHistory} from 'react-router'

export default class Login extends React.Component {

  constructor(props){
    super(props)

    this.state={
      isUserLoggedIn : false,
      userName: "",
      passwd: "",
      disabled: "disabled"
    }

    this.checkUsr = this.checkUsr.bind(this)
    this.handleChangeUserName = this.handleChangeUserName.bind(this)
    this.handleChangePasswd = this.handleChangePasswd.bind(this)
  }

  handleChangeUserName(e){

    this.setState({
      userName: e.target.value
    })

    let tempUserName = e.target.value

    if(tempUserName.length > 0 && this.state.passwd.length > 0){

      this.setState({
        disabled: ""
      })

    }

  }

  handleChangePasswd(e){

    this.setState({
      passwd: e.target.value
    })

    let tempPasswd = e.target.value

    if(tempPasswd.length > 0 && this.state.userName.length > 0){

      this.setState({
        disabled: ""
      })

    }

  }

  checkUsr() {

    let  userName1 = "user1"
    let  password1 = "pass1"

    console.log(this.state.userName);
    console.log(this.state.passwd);


    if(this.state.userName === userName1 && this.state.passwd === password1 ){

      this.setState({S
        isUserLoggedIn : true
      })

      browserHistory.push("/home")

    } else {
      browserHistory.push("/loginfailed")
    }

    console.log("==>"+this.state.isUserLoggedIn)



  }

  render(){
    return(
      <div>
        <table>
          <tbody>
          <tr>
            <td>Username : </td>
            <td><input type="text" name="username" value={this.state.userName} onChange={this.handleChangeUserName}/></td>
          </tr>
          <tr>
            <td>Password : </td>
            <td><input type="text" name="password" value={this.state.passwd} onChange={this.handleChangePasswd}/></td>
          </tr>
          <tr>
            <td colSpan="2"><button disabled={this.state.disabled} onClick={this.checkUsr}>Login</button></td>
          </tr>
          </tbody>
        </table>


      </div>

    )
  }


}
