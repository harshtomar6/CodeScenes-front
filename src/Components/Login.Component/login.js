import React from 'react';
import { loginAction } from './../../Actions';
import { connect } from 'react-redux';

class Login extends React.Component{

  constructor(){
    super();
    this.node = '';
  }

  render(){
    return (
      <div style={{paddingTop: '100px'}}>
      <input type='text' placeholder="Enter Anything" ref = { (node) => this.input = node }/>
      <button onClick={() => {this.props.handleClick(this.input.value)}}>Click ME</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleClick : (data) => {dispatch(loginAction(data))}
})

export default connect(null, mapDispatchToProps)(Login);
