import React from 'react';
import './post.css';
import thumb from './../../back.jpeg';

class Post extends React.Component{
  render(){
    return (
      <div className="post-card">
        <div className="post-thumb">
          <img src={thumb} alt="Post Thumb" className="img-responsive" />
        </div>
        <div className="post-title">
          <h4>{this.props.data.title}</h4>
        </div>
      </div>
    );
  }
}

export default Post;