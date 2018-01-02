import React from 'react';
import './login.css';
import { fetchPostData } from './../../Actions';
import { connect } from 'react-redux';
const config = require('./../../config');

class Login extends React.Component{

  constructor(){
    super();
    this.password = '';
    this.email = '';
  }

  handleSubmit(e){
    e.preventDefault();

    this.props.handleClick({
      email: this.email.value,
      password: this.email.password
    })
  }

  componentDidMount(){
    window.scrollTo(0, 0);
  }

  render(){
    console.log(this.props);
    return (
      <div id="login">
        <div id="login-wraper">
          <h3 className="text-center sub-head">Login</h3><br/><br/>
          <h4 className="text-center">{this.props.hasError ? 'Username or Password is wrong!!': ''}</h4>
          <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-group">
            <label for="">Email</label>
            <input className="form-control" type='email' placeholder="Email Address" 
              ref = { (node) => this.email = node } required/>
          </div>
          
          <div className="form-group">
            <label for="">Password</label>
            <input className="form-control" type="password" placeholder="Password"
              ref = { (node) => this.password = node } required/>
          </div><br/>
          <input type="submit" className="btn" style={{width: '100%'}} value="Log In" /> 
          </form>     
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.user.data,
  isLoading: state.user.isLoading,
  hasError: state.user.hasError
})

const mapDispatchToProps = (dispatch) => ({
  handleClick : (data) => {dispatch(fetchPostData(config.SERVER_URI+'/user/login', data))}
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
