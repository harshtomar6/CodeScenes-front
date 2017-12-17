import React, { Component } from 'react';
import './App.css';
import Login from './Components/Login.Component/login';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Home from './Components/home.component/home';
import Two from './Components/two.component/Two';
import Header from './Components/Header.Component/header';
import Footer from './Components/Footer.Component/footer';
import AddPost from './Components/AddPost.Component/addPost';

class App extends Component {

  render() {
    return (
      <MuiThemeProvider>
      <Router>
        <div>
          <Header />
          <Route exact path='/' component={Home} />
          <Route exact path='/two' component={Two} />
          <Route path='/login' component={Login} />
          <Route path='/new-post' component={AddPost} />
          <Footer />
        </div>
      </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;