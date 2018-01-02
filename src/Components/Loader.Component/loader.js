import React from 'react';
import './loader.css';

export default class Loader extends React.Component{
  render(){
    return(
      <div id="loader-wraper">
        <div id="loader">Loading...</div>
      </div>
    );
  }
}