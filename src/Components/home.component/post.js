import React from 'react';
import './post.css';

class Post extends React.Component{
  render(){

    const styles = {
      postHeader: {
        backgroundImage: this.props.data.headerImage === 'none' ? '': `url(${this.props.data.headerImage})`,
      }
    }
    return (
      <div className="post-card">
        <div className="post-thumb" style={styles.postHeader}>
          
        </div>
        <div className="post-title">
          <h3>{this.props.data.title}</h3>
          <p>Posted By: <br/> {this.props.data.author.name}</p>
          <p></p>
        </div>
      </div>
    );
  }
}

export default Post;