import React from 'react';
import './post.css';

class Post extends React.Component{
  render(){
    return (
      <div className="post-card">
        <div className="post-thumb">
          <h3>{this.props.data.title}</h3>
        </div>
        <div className="post-title">
          <p>Posted By: <br/> {this.props.data.author.name}</p>
          <p></p>
        </div>
      </div>
    );
  }
}

export default Post;