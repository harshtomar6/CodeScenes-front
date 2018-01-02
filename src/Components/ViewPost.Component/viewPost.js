import React from 'react';
import './viewPost.css';
import Loader from './../Loader.Component/loader';

class ViewPost extends React.Component {
  
  componentWillMount(){
    let postId = this.props.location.search.split('=')[1];

  }

  componentDidMount(){
    window.scrollTo(0, 0);
    document.title = this.props.match.params.post.split('-').join(' ') +' | Code Scenes'
  }

  render(){
    return(
      <div className="wrap">
        <div className="banner">
          <h2>{
            this.props.match.params.post.split('-').join(' ')
          }</h2>
        </div>
        <div className="overlay">
        <div id="" className="sec">
            <div className="post-grid">
              <Loader />
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default ViewPost;