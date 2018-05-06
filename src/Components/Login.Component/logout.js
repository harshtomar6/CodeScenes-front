import React from 'react';
import { logOutUser } from './../../actions';
import { connect } from 'react-redux';

class Logout extends React.Component {

  componentDidMount(){
    this.props.logOutUser();
    this.props.history.push('/');
  }

  render(){
    return <div></div>
  }
}

export default connect(null, { logOutUser })(Logout);