import React from 'react';

export default class Logout extends React.Component {

  componentWillMount(){
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('userData');
    this.props.history.push('/');
  }

  render(){
    return <div></div>
  }

}