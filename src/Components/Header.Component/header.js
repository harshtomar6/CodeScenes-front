import React from 'react';
import './header.css';
import Logo from './../../codeScenesLogo.png';
import { Link } from 'react-router-dom';
let GLOBALS = require('./../../globals');
let globalStyles = require('./../../styles');

class Header extends React.Component{

  constructor(){
    super();
    this.state = {
      loggedIn: false
    }
  }

  componentWillMount(){
    this.setState({
      loggedIn: GLOBALS.loggedIn
    })
  }

  componentDidMount(){
    document.getElementById('collapse').style.top = '-110vh';
  }

  handleClick(){
    let ele = document.getElementById('collapse');
    if(ele.style.top === '-110vh'){
      ele.style.top = '0px'
    }
    else{
      ele.style.top = '-110vh'
    }
  }

  handleHomeClick(){
    this.setState({
      class: 'close'
    })
  }

  render(){
    return(
      <header style={styles.header}>
        <Link to="/" onClick={this.handleHomeClick.bind(this)}>
          <img src={Logo} style={{width: '60px', height: '50px'}} alt="Logo"/>
        </Link>
        <h2 style={{color: globalStyles.primaryCaretColor}}>Code Scenes</h2>
        <div id="open">
          <ul>
            <li><Link to="/posts" style={{color: globalStyles.primaryCaretColor}}
              >Posts</Link>
            </li>
            <li><Link to="/writer" style={{color: globalStyles.primaryCaretColor}}>Become a Writer</Link></li>
            <li><Link to="/about" style={{color: globalStyles.primaryCaretColor}}>About</Link></li>
            {this.state.loggedIn ? 
              <li style={{color: globalStyles.primaryCaretColor}}>Profile</li>
            : 
            <li className="no-hover"> 
              <Link to="/login" className="no-hover">
                <button className="btn" style={styles.btn}>Login</button>
              </Link>
            </li>
            }
            <li className="no-hover">
            <button className="btn" style={styles.btn}>Signup</button>
            </li>
            
          </ul>
        </div>
        <i className="fa fa-bars" 
          onClick={this.handleClick.bind(this)} 
          style={{color: globalStyles.primaryCaretColor}}>
        </i>
        <div id="collapse">
          <span id="close" onClick={this.handleClick.bind(this)} style={{color: globalStyles.primaryCaretColor}}>
            &times;
          </span>
          <ul>
            <li className="no-hover">
              <Link to="/posts" onClick={this.handleClick.bind(this)} style={{color: globalStyles.primaryCaretColor}}>
              Posts</Link>
            </li>
            <li className="no-hover">
              <Link to="/writer" onClick={this.handleClick.bind(this)} style={{color: globalStyles.primaryCaretColor}}>
                Become a Writer</Link>
            </li>
            <li className="no-hover">
              <Link to="/about" onClick={this.handleClick.bind(this)} style={{color: globalStyles.primaryCaretColor}}>
                About</Link>
            </li>
            <li className="no-hover">{this.state.loggedIn ? 
              <Link to="" style={{color: globalStyles.primaryCaretColor}}>Dashboard</Link>:
              <Link to="/login">
                <button className="btn" onClick={this.handleClick.bind(this)}
                  style={styles.btn}>Login</button>
              </Link>
            }
            </li>
            <li className="no-hover">
              <Link to='/signup'>
                <button className="btn" onClick={this.handleClick.bind(this)}
                 style={styles.btn}>Signup</button>
              </Link>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

const styles = {
  header: {
    backgroundColor: globalStyles.primaryBackgroundColor,
    borderTop: '5px solid '+ globalStyles.primaryCaretColor,
  },
  btn: {
    backgroundColor: globalStyles.primaryCaretColor,
    border: '2px solid '+globalStyles.primaryCaretColor
  }
}

export default Header;