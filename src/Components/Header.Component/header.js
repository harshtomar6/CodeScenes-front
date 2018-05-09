import React from 'react';
import './header.css';
import { connect } from 'react-redux';
import Logo from './../../assets/codeScenesLogo.png';
import avatar from './../../assets/avatar.png';
import { Link } from 'react-router-dom';
import ProfileDropdown from './profileDropdown';
let globalStyles = require('./../../styles');

class Header extends React.Component{

  constructor(){
    super();
    this.state = {
      loggedIn: false,
      userData: null
    }
  }

  componentDidMount(){
    document.getElementById('collapse').style.top = '-110vh';
    
    let header = document.getElementsByTagName('header')[0];
    let currentOffset = window.pageYOffset;
    
    window.onscroll = function(){
      if(currentOffset - window.pageYOffset < 0){
        header.style.marginTop = '-80px';
      }
      else{
        header.style.marginTop = '0px';
      }
      currentOffset = window.pageYOffset;

      let editor = document.getElementById('editorControls');
      if(editor && currentOffset > 350){
        editor.style.position = 'fixed';
        editor.style.top = '-10px';
        editor.style.width = '90%';
      }

      if(editor && currentOffset < 350){
        editor.style.position = 'relative';
        editor.style.width = '100%';
      }
      
    };
  }

  handleClick = () => {
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
    console.log(Logo);
    return(
      <header style={styles.header}>
        <Link to="/" onClick={this.handleHomeClick.bind(this)}>
          <img src={Logo} style={{width: '60px', height: '50px'}} alt="Logo" id="logo"/>
        </Link>
        <h2 style={{color: globalStyles.primaryCaretColor}}>Code Scenes</h2>
        <div id="open">
          <ul>
            <li><Link to="/posts" style={{color: globalStyles.primaryCaretColor}}
              >Posts</Link>
            </li>
            <li>
              {
                this.props.user.loggedIn ? 
                <Link to="/user/posts" style={{color: globalStyles.primaryCaretColor}}>My Posts</Link> :
                <Link to="/writer" style={{color: globalStyles.primaryCaretColor}}>Become a Writer</Link>
              }
              
            </li>
            <li><Link to="/about" style={{color: globalStyles.primaryCaretColor}}>About</Link></li>
            {this.props.user.loggedIn ? 
              <li className="no-hover">
                <ProfileDropdown dp={this.props.user.userData.user.avatar === 'none' ? avatar : this.props.user.userData.user.avatar} 
                  name={this.props.user.userData.user.name} 
                  description={this.props.user.userData.user.description}/>
              </li>
            : 
            <li className="no-hover"> 
              <Link to="/login" className="no-hover">
                <button className="btn" style={styles.btn}>Login</button>
              </Link>
            </li>
            }
            {
              this.props.user.loggedIn? '': <li className="no-hover">
              <button className="btn" style={styles.btn}>Signup</button>
              </li>
            }
            
            
          </ul>
        </div>
        <i className="fa fa-bars" 
          onClick={this.handleClick} 
          style={{color: globalStyles.primaryCaretColor}}>
        </i>
        <div id="collapse">
          <span id="close" onClick={this.handleClick} style={{color: globalStyles.primaryCaretColor}}>
            &times;
          </span>
          <ul>
            <li className="no-hover">
              <Link to="/posts" onClick={this.handleClick} style={{color: globalStyles.primaryCaretColor}}>
              Posts</Link>
            </li>
            <li className="no-hover">
              <Link to="/writer" onClick={this.handleClick} style={{color: globalStyles.primaryCaretColor}}>
                Become a Writer</Link>
            </li>
            <li className="no-hover">
              <Link to="/about" onClick={this.handleClick} style={{color: globalStyles.primaryCaretColor}}>
                About</Link>
            </li>
            <li className="no-hover">{this.state.loggedIn ? 
              <Link to="" style={{color: globalStyles.primaryCaretColor}}>Dashboard</Link>:
              <Link to="/login">
                <button className="btn" onClick={this.handleClick}
                  style={styles.btn}>Login</button>
              </Link>
            }
            </li>
            <li className="no-hover">
              <Link to='/signup'>
                <button className="btn" onClick={this.handleClick}
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
    position: 'normal',
    backgroundColor: globalStyles.primaryBackgroundColor,
    borderTop: '5px solid '+ globalStyles.primaryCaretColor,
    marginTop: 0
  },
  btn: {
    backgroundColor: globalStyles.primaryCaretColor,
    border: '2px solid '+globalStyles.primaryCaretColor
  }
}

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps)(Header);