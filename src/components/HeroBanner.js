import React, { Component } from "react";
import '../style/heroBanner.css'

class HeroBanner extends Component {
  render() {

    return <div className="hero--container" >
        {/* <video src="../img/video-2.mp4" autoPlay loop muted /> */}
        <h1>text</h1>
        <p>what are you waiting for</p>
        <div className="hero--btns" >
            <button>get started</button>
            <button>watch trailers</button>
        </div>
    </div>;
  }
}

export default HeroBanner;
