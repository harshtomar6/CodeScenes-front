import React from 'react';
import './login.css';
import Loader from './../Loader.Component/loader';
import Overlay from './../Overlay.Component/overlay';
import { logInUser } from './../../actions';
import { connect } from 'react-redux';
import { GOOGLE_LOGIN_URI } from './../../config';

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

  async handleSubmit(e){
    e.preventDefault();
    this.overlay.toggleOverlay();

    await this.props.logInUser({
      email: this.email.value,
      password: this.password.value
    });
    this.overlay.toggleOverlay();
    if(this.props.user.loggedIn)
      this.props.history.push('/');
  }

  componentDidMount(){
    window.scrollTo(0, 0);
  }

  render(){
    return (
      <div>
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
          <a href={ GOOGLE_LOGIN_URI }>Continue With Google</a>     
        </div>
      </div>
      <Overlay ref={e => this.overlay = e} children={() => <Loader />}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps, { logInUser })(Login);
