import React from 'react';
import './dashboard.css';
import ProfilBack from './../../assets/profile-back.jpg';
import { Switch, Route, Link } from 'react-router-dom';
import MyPosts from './myPosts';

export default class Dashboard extends React.Component {
  
  componentDidMount(){
    document.title = 'Dashboard | Code-Scenes'
  }

  render(){
    return (
      <div>
        <div className="banner" style={{backgroundImage: `url(${ProfilBack})`, backgroundColor: 'rgba(0,0,0,0.8'}}>
          <h2>Dashboard</h2>
          <div className="rule" style={{background: '#fff'}}></div>
          <p className="center">Programs must be written for people to read,<br/>
             and only incidentally for machines to execute</p>
        </div>
        <div className="overlay">
          <div className="sec" style={{display: 'flex', flexDirection: 'column'}}>
            <div id="dash-tabs">
              <ul>
                <li><Link to='/my-posts'>My Posts</Link></li>
              </ul>
            </div>
            <div>
            </div>
          </div>  
        </div>

        
        <Switch>
          <Route path="/my-posts" component={MyPosts}/>
        </Switch>
      </div>
    );
  }
} 