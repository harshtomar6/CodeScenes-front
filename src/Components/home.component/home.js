 import React from 'react';
 import './home.css';
 import Post from './post';
 import { connect } from 'react-redux';
 import { fetchData } from './../../Actions';
 
 class Home extends React.Component{

  constructor(){
    super()
    this.getPosts = this.getPosts.bind(this);
  }

  componentWillMount(){
    console.log(this.props);
    this.props.fetch('http://localhost:3001/api/getAllPosts')
  }

  componentWillReceiveProps(newProps){
    console.log("Updated" + newProps)
    console.log(this.props);
  }

  getPosts(){
    if(this.props.isLoading)
      return <p>Loading...</p>
    else
      return <Post data={this.props.data[0]}/>
  }

  render(){
    return(
      <div>
        <div id="banner">
          <h2>Code Scenes</h2>
          <div className="rule" style={{background: '#fff'}}></div>
          <p className="text-center">Code Scenes is all about something that i dont know. <br/>basically is is to write code to kill boredom</p>
        </div>
        <div id="h-second" className="sec">
          <h3 className="sub-head">Latest Posts</h3>
          <div className="rule"></div>
          <div className="post-grid">
            <this.getPosts />
          </div>
        </div>
        <div id="h-third" className="sec">
          <h3 className="sub-head">Popular Posts</h3>
          <div className="rule"></div>
          <div className="post-grid">
            <Post />
            <Post />
            <Post />
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
   fetch: (url) => {dispatch(fetchData(url))}
 })

 export default connect(mapStateToProps, mapDispatchToProps)(Home);