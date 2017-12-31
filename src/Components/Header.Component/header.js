import React from 'react';
import './header.css';
import Logo from './../../codeScenesLogo.png';
import { Link } from 'react-router-dom';

class Header extends React.Component{

  constructor(){
    super();

    this.state = {
      class: 'close'
    }
  }

  handleClick(){

    if(this.state.class === 'open')
      this.setState({
        class: 'close' 
      })
    else
      this.setState({
        class: 'open'
      })
  }

  handleHomeClick(){
    this.setState({
      class: 'close'
    })
  }

  render(){
    return(
      <header>
        <Link to="/" onClick={this.handleHomeClick.bind(this)}>
          <img src={Logo} style={{width: '60px', height: '50px'}} alt="Logo"/>
        </Link>
        <h2>Code Scenes</h2>
        <div id="open">
          <ul>
            <li><Link to="/posts">Posts</Link></li>
            <li><Link to="/writer">Become a Writer</Link></li>
            <li><Link to="/about">About</Link></li>
            <li className="no-hover">
              <Link to="/login" className="no-hover">
                <button className="btn">Login</button>
              </Link>
            </li>
            <li className="no-hover">
            <button className="btn">Signup</button>
            </li>
          </ul>
        </div>
        <i className="fa fa-bars" onClick={this.handleClick.bind(this)}></i>
        <div id="collapse" className={this.state.class}>
          <ul>
            <li><Link to="/posts" onClick={this.handleClick.bind(this)}>Posts</Link></li>
            <li><Link to="/writer" onClick={this.handleClick.bind(this)}>Become a Writer</Link></li>
            <li><Link to="/about" onClick={this.handleClick.bind(this)}>About</Link></li>
            <li>
              <Link to="/login">
                <button className="btn" onClick={this.handleClick.bind(this)}>Login</button>
              </Link>
            </li>
            <li>
              <Link to='/signup'>
                <button className="btn" onClick={this.handleClick.bind(this)}>Signup</button>
              </Link>
            </li>
          </ul>
        </div>
      </header>
    );
  }

}

export default Header;