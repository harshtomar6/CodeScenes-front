import React from 'react';
import './viewPost.css';
import Loader from './../Loader.Component/loader';
import ReactHtmlParser from 'react-html-parser';
import { connect } from 'react-redux';
import { fetchSinglePost } from './../../actions';

class ViewPost extends React.Component {

  componentDidMount(){
    window.scrollTo(0, 0);
    document.title = this.props.match.params.post.split('-').join(' ') +' | Code Scenes';
    let postId = this.props.location.search.split('=')[1];
    
    if(this.props.post.data._id !== postId)
      this.props.fetchSinglePost(postId);
  }

  render(){
    let postContent = '';
    const { post } = this.props

    const styles = {
      banner: {
        backgroundImage: !post.isLoading && !post.hasError ? 
          post.data.headerImage === 'none' ? '#364950' : `url(${post.data.headerImage})` :
          '',
        position: 'relative'
      }
    }

    if(post.isLoading)
      postContent = <Loader />
    else if(post.hasError)
      postContent = <p>An Error Occured</p>
    else{
      console.log(post.data.content)
      postContent = ReactHtmlParser(post.data.content);
    }
    return(
      <div className="wrap">
        <div className="banner" style={styles.banner}>
          <div className="imageOverlay"></div>
          <h2 style={{zIndex: 2}}>{
            post.isLoading || post.hasError? '-' : post.data.title
          }</h2>
          <h4 style={{textAlign: 'center', fontFamily: 'Varela Round', zIndex: 2}}>
            Posted By {post.isLoading || post.hasError ? '-': post.data.author.name} on 
            <br /> {post.isLoading || post.hasError ? '-' : new Date(post.data.timestamp).toDateString()}
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

const mapStateToProps = state => ({
  post: state.singlePost
})

export default connect(mapStateToProps, { fetchSinglePost })(ViewPost);