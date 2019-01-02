 import React from 'react';
 import './home.css';
 import Post from './post';
 import { Link } from 'react-router-dom';
 import { fetchPosts } from './../../actions';
 import WithApiCall from './../../hoc/ApiCall';

 class Home extends React.Component{
  
  componentDidMount(){
    document.title = 'CodeScenes | Make coding not only you profession but your habit';
  }

  render(){
    const getPosts = this.props.posts.data.map( post => 
        <Link to={post.link+'?id='+post.id} key={post.id}><Post data={post} /></Link>
      ) 
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
        </div>
      </div>
    );
  }
 }

 const mapStateToProps = state => ({
  posts: state.posts
 });

 export default WithApiCall(mapStateToProps, fetchPosts)(Home);