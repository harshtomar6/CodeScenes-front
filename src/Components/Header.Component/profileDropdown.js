import React from 'react';
import './profileDropdown.css';
import { Link } from 'react-router-dom';

export default class ProfileDropdown extends React.Component {

  handleMouseOver = () => {
    if(this.dropdown.style.display === 'none')
      this.dropdown.style.display = 'block';
  }

  handleMouseOut = () => {
    if(this.dropdown.style.display === 'block')
      this.dropdown.style.display = 'none';
  }

  render(){
    return (
      <span>
        <img src={this.props.dp} id="profile-thumbnail" 
          onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} alt="profile-thumbnail"/>
          
        <div id="dropdown" ref={e => this.dropdown = e} style={{display: 'none'}}
          onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
          <div id="dropdown-upper">
            <div><img src={this.props.dp} alt="thumbnail"/></div>
            <p style={{textAlign: 'center'}}>{this.props.name}</p>
            <p style={{textAlign: 'center', fontSize: '0.8em', color: '#666'}}>{this.props.description}</p>
          </div>
          <div id="dropdown-lower">
            <ul>
            <li>
                <Link to='/new-post' className="dropdown-link">
                <i className="fa fa-plus dropdown-icon"></i>&nbsp;&nbsp;New Post</Link>
              </li>
              <li>
                <Link to='/dashboard' className="dropdown-link">
                <i className="fa fa-home dropdown-icon"></i>&nbsp;&nbsp;Dashboard</Link>
              </li>
              <li>
                <Link to='/profile' className="dropdown-link">
                <i className="fa fa-user dropdown-icon"></i>&nbsp;&nbsp;Profile</Link>
              </li>
              <li>
                <Link to='/logout' className="dropdown-link">
                <i className="fa fa-sign-out dropdown-icon"></i>&nbsp;&nbsp;Log Out</Link>
              </li>
            </ul>
          </div>
        </div>
      </span>
    );
  }
}
