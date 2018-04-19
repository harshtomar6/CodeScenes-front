import React, { Component } from 'react';
import './App.css';
import Login from './Components/Login.Component/login';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Home from './Components/home.component/home';
import Footer from './Components/Footer.Component/footer';
import AddPost from './Components/AddPost.Component/addPost';
import ViewPost from './Components/ViewPost.Component/viewPost';
import Logout from './Components/Login.Component/logout';
import Profile from './Components/Profile.Component/profile';
import Dashboard from './Components/Dashboard.Component/dashboard';

class App extends Component {

  render() {
    return (
      <MuiThemeProvider>
      <Router>
        <div>
          <Route exact path='/' component={Home} />
          <Route path='/login' render={props => <Login {...props}/>} />
          <Route path='/logout' component={Logout} />
          <Route path='/new-post' component={AddPost} />
          <Route path='/profile' component={Profile} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path="/:username/:post" component={ViewPost} />
          <Footer />
        </div>
      </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;