import React from 'react';
import './overlay.css';

export default class Overlay extends React.Component {

  constructor(){
    super();
    this.state = {
      opacity: 0
    }
  }

  componentDidMount(){
    let ele = document.getElementById('overlay-wrap');
    ele.style.opacity = 0;
    ele.style.zIndex = -10;
  }

  toggleOverlay(){
    let ele = document.getElementById('overlay-wrap');
    let body = document.getElementsByTagName('body')[0];
    if(ele.style.opacity === 0){
      ele.style.width = '100vw';
      ele.style.zIndex = 1000;
      ele.style.opacity = 1;
      body.style.overflow = 'hidden';
    }
    else{
      ele.style.width = 0;
      ele.style.zIndex = -10;
      ele.style.opacity = 0;
      body.style.overflow = 'auto';
    }
  }

  render(){
    return (
      <div id="overlay-wrap">
        <div id="overlay-container">
          {this.props.children()}
        </div>
      </div>
    );
  }
}