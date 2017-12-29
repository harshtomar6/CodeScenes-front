import React from 'react';
import './addPost.css';

class AddPost extends React.Component {

  constructor(){
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      title: 'Your Post Title Here'
    }

  }

  handleChange(e){
    this.setState({
      title: e.target.value
    })
  }

  render(){
    return (
      <div className="wrap" style={{paddingTop: '60px'}}>
        <form>
          <div className="head-section">
            <input type="text" class="form-input title-head" placeholder={this.state.title} 
              onChange={this.handleChange} />
          </div>
          <div id="addPost-bottom">
            <div></div>
            <textarea rows="10"></textarea>
          </div>
        </form>
      </div>
    );
  }
}

export default AddPost;