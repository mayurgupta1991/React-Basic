
import React from 'react';
import {browserHistory} from 'react-router';

export default class HomePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      text: {
        username:"",
        password:""
      },
      credentials : {
        username:"mayur",
        password:"mayur"
      }
    };

    this.checkAuth = this.checkAuth.bind(this);
    this.setInput = this.setInput.bind(this);
  };

  checkAuth(){

    if((this.state.text.username == this.state.credentials.username)&& (this.state.text.password == this.state.credentials.password)){
      browserHistory.push('/home');
    }else{
      browserHistory.push('/loginFailed');
    }
  }

  setInput(e){
    let initialState=this.state.text;
    initialState[e.target.name]=e.target.value;
    this.setState(initialState);
  }

  render() {
    return (
      <div>
        Login

        <div>
          Username : <InputEle type="text" value ={this.state.text.username} name ="username"  onChange = {this.setInput} />
        </div>
        <div>
          Password : <InputEle type="password" value ={this.state.text.password} name ="password"  onChange = {this.setInput} />
        </div>


        <button onClick={this.checkAuth}>Submit</button>
      </div>
    );
  }
}

class InputEle extends React.Component{
  render() {
    return (
      <div>
        <input type = {this.props.type} name={this.props.name} value = {this.props.value}  onChange = {this.props.onChange} />
      </div>
    );
  }
}

InputEle.propTypes = {
  name: React.PropTypes.string,
  type: React.PropTypes.string,
  value: React.PropTypes.string,
  onChange: React.PropTypes.func
}
