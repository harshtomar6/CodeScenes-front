import React from 'react';
import './viewPost.css';
import Loader from './../Loader.Component/loader';
import Header from './../Header.Component/header';
import ReactHtmlParser from 'react-html-parser';
let GLOBALS = require('../../globals');

class ViewPost extends React.Component {
  
  constructor(){
    super();
    this.state = {
      data: null,
      isLoading: true,
      hasError: false
    }
  }

  componentWillMount(){
    let postId = this.props.location.search.split('=')[1];
    GLOBALS.getData('/api/post/'+postId, (err, data) => {
      if(err)
        this.setState({hasError: true, isLoading: false});
      else{
        this.setState({data: data, isLoading: false});
        console.log(data);
      }
    });
  }

  componentDidMount(){
    window.scrollTo(0, 0);
    document.title = this.props.match.params.post.split('-').join(' ') +' | Code Scenes';
  }

  render(){
    let postContent = '';

    const styles = {
      banner: {
        backgroundImage: !this.state.isLoading && !this.state.hasError ? 
          this.state.data.headerImage === 'none' ? '#364950' : `url(${this.state.data.headerImage})` :
          '',
        position: 'relative'
      }
    }

    if(this.state.isLoading)
      postContent = <Loader />
    else if(this.state.hasError)
      postContent = <p>An Error Occured</p>
    else{
      console.log(this.state.data.content)
      postContent = ReactHtmlParser(this.state.data.content);
    }
    return(
      <div className="wrap">
        <Header />
        <div className="banner" style={styles.banner}>
          <div className="imageOverlay"></div>
          <h2 style={{zIndex: 2}}>{
            this.state.isLoading || this.state.hasError? '-' : this.state.data.title
          }</h2>
          <h4 style={{textAlign: 'center', fontFamily: 'Varela Round', zIndex: 2}}>
            Posted By {this.state.isLoading || this.state.hasError ? '-': this.state.data.author.name} on 
            <br /> {this.state.isLoading || this.state.hasError ? '-' : new Date(this.state.data.timestamp).toDateString()}
          </h4>
          
        </div>
        <div className="overlay">
        <div id="" className="sec">
            {/*<div id="tags-wrapper">
              <span className="tag tag-red">PYHTON PROGRAMMING</span>
              <span className="tag tag-green">PRODUCTIVITY</span>
              <span className="tag tag-blue">TIME PASS</span>
        </div>*/}
            <div className="post-content">
              {postContent}
            </div>
            <div className="side-content">
              <h3>About the Author</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default ViewPost;