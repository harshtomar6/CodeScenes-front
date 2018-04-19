 import React from 'react';
 import './home.css';
 import Post from './post';
 import Loader from './../Loader.Component/loader';
 import Header from './../Header.Component/header';
 import { Link } from 'react-router-dom';
 let GLOBALS = require('./../../globals');

 class Home extends React.Component{
  
  constructor(){
    super();
    this.state = {
      data: [],
      isLoading: false,
      isError: false
    }
  }

  componentWillMount(){
    console.log('Mounted');
    if(GLOBALS.homeData.length > 0)
      this.setState({data: GLOBALS.homeData})
    else{
      this.setState({isLoading: true})
      GLOBALS.getData('/api/post', (err, data) => {
        this.setState({isLoading: false})
        if(err)
          this.setState({isError: err, data:data})
        else{
          this.setState({data: data})
          GLOBALS.homeData = data
        }
      })
    }
  }

  componentDidMount(){
    document.title = 'CodeScenes | Make coding not only you profession but your habit'
  }

  render(){

    let getPosts = '';

    if(this.state.isLoading)
      getPosts = <Loader />
    
    else if(this.state.isError)
      getPosts = <p>An error Occured</p>
    else{
      getPosts = this.state.data.map( post => 
        <Link to={post.link+'?id='+post.id} key={post.id}><Post data={post} /></Link>
      ) 
    }
    return(
      <div>
        <Header />
        <div className="banner">
          <h2>Code Scenes</h2>
          <div className="rule" style={{background: '#fff'}}></div>
          <p className="text-center">Make coding not only your profession but your habit. 
            <br/>Learn to make cool stuff with Code Scenes.
            </p>
        </div>
        <div className="overlay">
          <div id="h-second" className="sec">
            <h3 className="sub-head">Latest Posts</h3>
            <div className="rule"></div>
            <div className="post-grid">
              {getPosts}
            </div>
          </div>
          <div id="h-third" className="sec">
            <h3 className="sub-head">Popular Posts</h3>
            <div className="rule"></div>
            <div className="post-grid">
              {getPosts}
            </div>
          </div>
        </div>
      </div>
    );
  }

 }

 export default Home;