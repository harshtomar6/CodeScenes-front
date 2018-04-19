import React from 'react';
import './profile.css';
import Header from './../Header.Component/header';
import ProfilBack from './../../profile-back.jpg';
import avatar from './../../avatar.png';

export default class extends React.Component {

  constructor(){
    super();
    this.state = {
      userData: ''
    }
  }

  componentWillMount(){
    let userData = JSON.parse(localStorage.getItem('userData')).user;

    this.setState({userData});
  }

  render(){
    return (
      <div>
        <Header />
        <div className="banner" style={{backgroundImage: `url(${ProfilBack})`}}>
          <h2>My Profile</h2>
          <div className="rule" style={{background: '#fff'}}></div>
        </div>
        <div className="overlay">
          <div className="sec" style={{display: 'flex', flexDirection: 'column'}}>
            <div style={{display: 'flex', justifyContent: 'center', padding: '20px'}}>
              <img src={this.state.userData.avatar === 'none' ? avatar : this.state.userData.avatar} 
                style={{width: '200px', height: '200px', borderRadius: '100px'}} alt="Avatar" />
            </div>

            <div style={{display: 'flex', justifyContent:'center', flexWrap: 'wrap'}}>
              <div style={{display: 'flex', flex: 1, justifyContent: 'flex-end'}}>
                <div style={{display: 'flex', flex: 0.25, justifyContent: 'flex-sart'}}>
                  <span className="span-tag">Name</span>
                </div>
              </div>
              <div style={{display: 'flex',flex: 1, justifyContent: 'flex-start'}}>
                <span className="span-val">{this.state.userData.name}</span> 
              </div>
            </div>
            <div style={{display: 'flex', justifyContent:'center'}}>
              <div style={{display: 'flex',flex: 1, justifyContent: 'flex-end'}}>
                <div style={{display: 'flex', flex: 0.25, justifyContent: 'flex-start'}}>
                  <span className="span-tag">Description</span>
                </div>
              </div>
              <div style={{display: 'flex',flex: 1, justifyContent: 'flex-start'}}>
                <span className="span-val">{this.state.userData.description}</span> 
              </div>
            </div>
            <div style={{display: 'flex', justifyContent:'center'}}>
              <div style={{display: 'flex',flex: 1, justifyContent: 'flex-end'}}>
                <div style={{display: 'flex', flex: 0.25,justifyContent: 'flex-start'}}>
                  <span className="span-tag">Email</span>
                </div>
              </div>
              <div style={{display: 'flex',flex: 1, justifyContent: 'flex-start'}}>
                <span className="span-val">{this.state.userData.email}</span> 
              </div> 
            </div>
          </div>
        </div>
      </div>
    );
  }
}