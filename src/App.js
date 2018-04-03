import React, { Component } from 'react';
import './App.css';
import Login from './Components/Login.Component/login';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Home from './Components/home.component/home';
import Footer from './Components/Footer.Component/footer';
import AddPost from './Components/AddPost.Component/addPost';
import ViewPost from './Components/ViewPost.Component/viewPost';

class App extends Component {

  render() {
    return (
      <MuiThemeProvider>
      <Router>
        <div>
          <Route exact path='/' component={Home} />
          <Route path='/login' render={props => <Login {...props}/>} />
          <Route path='/new-post' component={AddPost} />
          <Route path="/:username/:post" component={ViewPost} />
          <Footer />
        </div>
      </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;