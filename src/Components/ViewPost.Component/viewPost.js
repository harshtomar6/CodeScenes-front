import React from 'react';
import './viewPost.css';
import Loader from './../Loader.Component/loader';
import Header from './../Header.Component/header';
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
    document.title = this.props.match.params.post.split('-').join(' ') +' | Code Scenes'
  }

  render(){
    let postContent = '';

    if(this.state.isLoading)
      postContent = <Loader />
    else if(this.state.hasError)
      postContent = <p>An Error Occured</p>
    else
      postContent = <p>{this.state.data.content}</p>

    return(
      <div className="wrap">
        <Header />
        <div className="banner">
          <h2>{
            this.props.match.params.post.split('-').join(' ')
          }</h2>
        </div>
        <div className="overlay">
        <div id="" className="sec">
            <div className="post-grid">
              {postContent}
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default ViewPost;