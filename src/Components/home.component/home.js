 import React from 'react';
 import './home.css';
 import Post from './post';
 import { connect } from 'react-redux';
 import { fetchGetData } from './../../Actions';
 import { Link } from 'react-router-dom';
 const config = require('./../../config');
 
 class Home extends React.Component{

  constructor(){
    super()
    this.getPosts = this.getPosts.bind(this);
  }

  componentWillMount(){
    this.props.fetch(config.SERVER_URI+'/api/getAllPosts')
  }

  getPosts(){
    if(this.props.isLoading)
      return <p>Loading...</p>
    else
      return 
  }

  render(){

    let getPosts = '';

    if(this.props.isLoading)
      getPosts = <p>Loading...</p>
    
    else if(this.props.hasError)
      getPosts = <p>An Error Occured</p>
    else{
      getPosts = this.props.data.map( post => 
        <Link to='/harshtomar6/asd'><Post key={post._id} data={post}/></Link>
      ) 
    }
    return(
      <div>
        <div id="banner">
          <h2>Code Scenes</h2>
          <div className="rule" style={{background: '#fff'}}></div>
          <p className="text-center">Code Scenes is all about something that i dont know. <br/>basically is is to write code to kill boredom</p>
        </div>
        <div id="overlay">
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