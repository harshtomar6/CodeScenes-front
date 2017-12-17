import React from 'react';
import './addPost.css';

class AddPost extends React.Component {
  render(){
    return (
      <div className="wrap" style={{paddingTop: '100px'}}>
        <div className="">
          <form>
            <div className="form-group">
              <label>Post Title</label>
              <input type="text" className="form-control" placeholder="Enter a sexy title"/>
            </div>
            <div className="form-group">
              <div></div>
              <textarea className="form-control" rows="10"></textarea>
            </div>
          </form>
        </div>
        <div className="">
          <h3>Preview</h3>
        </div>
      </div>
    );
  }
}

export default AddPost;