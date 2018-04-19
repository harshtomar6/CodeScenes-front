import React from 'react';
import './dashboard.css';
import Header from './../Header.Component/header';
import ProfilBack from './../../profile-back.jpg';

export default class Dashboard extends React.Component {

  render(){
    return (
      <div>
        <Header />
        <div className="banner" style={{backgroundImage: `url(${ProfilBack})`, backgroundColor: 'rgba(0,0,0,0.8'}}>
          <h2>Dashboard</h2>
          <div className="rule" style={{background: '#fff'}}></div>
          <p className="center">Programs must be written for people to read,<br/>
             and only incidentally for machines to execute</p>
        </div>
        <div className="overlay">
          <div className="sec" style={{display: 'flex', flexDirection: 'column'}}>
          </div>  
        </div>
      </div>
    );
  }
}