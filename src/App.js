import React, { Component } from 'react';
import './App.css';
import Login from './Components/Login.Component/login';
import { Route, Switch } from 'react-router-dom';
import Home from './Components/home.component/home';
import Footer from './Components/Footer.Component/footer';
import AddPost from './Components/AddPost.Component/addPost';
import ViewPost from './Components/ViewPost.Component/viewPost';
import Logout from './Components/Login.Component/logout';
import Profile from './Components/Profile.Component/profile';
import Dashboard from './Components/Dashboard.Component/dashboard';
import Header from './Components/Header.Component/header';

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/login' render={props => <Login {...props}/>} />
          <Route path='/logout' component={Logout} />
          <Route path='/new-post' component={AddPost} />
          <Route path='/profile' component={Profile} />
          <Route path='/dashboard' component={Dashboard} />
          <Route exact path="/:username/:post" component={ViewPost} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;