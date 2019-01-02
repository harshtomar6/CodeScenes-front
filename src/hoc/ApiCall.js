import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Loader from './../Components/Loader.Component/loader';

export default (mapStateToProps, actionCreators) => WrappedComponent => {
  class WithApiCall extends React.Component {

    componentDidMount(){
      this.props.actionCreators();
    }

    render(){
      let getPosts;
      const { posts } = this.props

      if(posts.isLoading)
        getPosts = <Loader />
      else if(posts.hasError) 
        getPosts = <p>{JSON.stringify(posts.errMsg)}</p>
      else
        getPosts = <WrappedComponent {...this.props}/> 

      return (
        <Fragment>
          {getPosts}
        </Fragment>
      );
    }
  }

  return connect(mapStateToProps, { actionCreators })(WithApiCall);
}
