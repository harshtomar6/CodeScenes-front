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

  render(){
    return(
      <header>
        <Link to="/"><img src={Logo} style={{width: '60px', height: '50px'}} alt="Logo"/></Link>
        <h2>Code Scenes</h2>
        <div id="open">
          <ul>
            <li><Link to="/posts">Posts</Link></li>
            <li><Link to="/writer">Become a Writer</Link></li>
            <li><Link to="/about">About</Link></li>
            <li>
              <Link to="/login">
                <button className="btn">Login</button>
              </Link>
            </li>
            <li>
            <button className="btn">Signup</button>
            </li>
          </ul>
        </div>
        <i className="fa fa-bars" onClick={this.handleClick.bind(this)}></i>
        <div id="collapse" className={this.state.class}>
          <ul>
            <li><Link to="/posts">Posts</Link></li>
            <li><Link to="/writer">Become a Writer</Link></li>
            <li><Link to="/about">About</Link></li>
            <li>
              <Link to="/login">
                <button className="btn">Login</button>
              </Link>
            </li>
            <li>
            <button className="btn">Signup</button>
            </li>
          </ul>
        </div>
      </header>
    );
  }

}

export default Header;