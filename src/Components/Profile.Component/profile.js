import React from 'react';
import './profile.css';
import ProfilBack from './../../assets/profile-back.jpg';
import avatar from './../../assets/avatar.png';
import { connect } from 'react-redux'; 

class Profile extends React.Component {
  render(){
    return (
      <div>
        <div className="banner" style={{backgroundImage: `url(${ProfilBack})`}}>
          <h2>My Profile</h2>
          <div className="rule" style={{background: '#fff'}}></div>
        </div>
        <div className="overlay">
          <div className="sec" style={{display: 'flex', flexDirection: 'column'}}>
            <div style={{display: 'flex', justifyContent: 'center', padding: '20px'}}>
              <img src={this.props.user.avatar === 'none' ? avatar : this.props.user.avatar} 
                style={{width: '200px', height: '200px', borderRadius: '100px'}} alt="Avatar" />
            </div>

            <div style={{display: 'flex', justifyContent:'center', flexWrap: 'wrap'}}>
              <div style={{display: 'flex', flex: 1, justifyContent: 'flex-end'}}>
                <div style={{display: 'flex', flex: 0.25, justifyContent: 'flex-sart'}}>
                  <span className="span-tag">Name</span>
                </div>
              </div>
              <div style={{display: 'flex',flex: 1, justifyContent: 'flex-start'}}>
                <span className="span-val">{this.props.user.name}</span> 
              </div>
            </div>
            <div style={{display: 'flex', justifyContent:'center'}}>
              <div style={{display: 'flex',flex: 1, justifyContent: 'flex-end'}}>
                <div style={{display: 'flex', flex: 0.25, justifyContent: 'flex-start'}}>
                  <span className="span-tag">Description</span>
                </div>
              </div>
              <div style={{display: 'flex',flex: 1, justifyContent: 'flex-start'}}>
                <span className="span-val">{this.props.user.description}</span> 
              </div>
            </div>
            <div style={{display: 'flex', justifyContent:'center'}}>
              <div style={{display: 'flex',flex: 1, justifyContent: 'flex-end'}}>
                <div style={{display: 'flex', flex: 0.25,justifyContent: 'flex-start'}}>
                  <span className="span-tag">Email</span>
                </div>
              </div>
              <div style={{display: 'flex',flex: 1, justifyContent: 'flex-start'}}>
                <span className="span-val">{this.props.user.email}</span> 
              </div> 
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.userData.user
})

export default connect(mapStateToProps)(Profile);