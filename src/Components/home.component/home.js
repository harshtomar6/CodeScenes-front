 import React from 'react';
 import './home.css';
 import Post from './post';
 import Loader from './../Loader.Component/loader';
 import { connect } from 'react-redux';
 import { fetchGetData } from './../../Actions';
 import { Link } from 'react-router-dom';
 const config = require('./../../config');
 
 class Home extends React.Component{

  componentWillMount(){
    this.props.fetch(config.SERVER_URI+'/api/getAllPosts')
  }

  render(){

    let getPosts = '';

    if(this.props.isLoading)
      getPosts = <Loader />
    
    else if(this.props.hasError)
      getPosts = <p>An Error Occured</p>
    else{
      getPosts = this.props.data.map( post => 
        <Link to={post.link+'?id='+post.id} key={post.id}><Post data={post} /></Link>
      ) 
    }
    return(
      <div>
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

 const mapStateToProps = (state) => ({
  data: state.home.data,
  isLoading: state.home.isLoading,
  hasError: state.home.hasError
 })

 const mapDispatchToProps = (dispatch) => ({
   fetch: (url) => {dispatch(fetchGetData(url))}
 })

 export default connect(mapStateToProps, mapDispatchToProps)(Home);