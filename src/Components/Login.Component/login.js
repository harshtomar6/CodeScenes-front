import React from 'react';
import './login.css';
import Header from './..//Header.Component/header';
import Loader from './../Loader.Component/loader';
import Overlay from './../Overlay.Component/overlay';
let GLOBALS = require('./../../globals');

class Login extends React.Component{

  constructor(){
    super();
    this.overlay = null;
    this.password = '';
    this.email = '';
    this.state = {
      isLoading: false
    }
  }

  handleSubmit(e){
    e.preventDefault();
    this.overlay.toggleOverlay();;
    GLOBALS.postData('/user/login', {
      email: this.email.value,
      password: this.password.value
    }, (err, data) => {
      this.overlay.toggleOverlay();
      
      if(err)
        this.setState({isError: true})
      else{
        //console.log(err, data)
        GLOBALS.userData = data;
        GLOBALS.loggedIn = true;
        this.props.history.push('/');
      }
    })
  }

  componentDidMount(){
    window.scrollTo(0, 0);
  }

  render(){
    return (
      <div>
      <Header />
      <div id="login">
        <div id="login-wraper">
          <h3 className="text-center sub-head">Login</h3><br/><br/>
          <h4 className="text-center">{this.props.hasError ? 'Username or Password is wrong!!': ''}</h4>
          <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-group">
            <label htmlFor="">Email</label>
            <input className="form-control" type='email' placeholder="Email Address" 
              ref = { (node) => this.email = node } required/>
          </div>
          
          <div className="form-group">
            <label htmlFor="">Password</label>
            <input className="form-control" type="password" placeholder="Password"
              ref = { (node) => this.password = node } required/>
          </div><br/>
          <input type="submit" className="btn" style={{width: '100%'}} value="Log In" /> 
          </form>     
        </div>
      </div>
      <Overlay ref={e => this.overlay = e} children={() => <Loader />}/>
      </div>
    );
  }
}

export default Login;
