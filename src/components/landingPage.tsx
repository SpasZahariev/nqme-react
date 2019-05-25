import React, { Component } from "react";
import "./landingPage.scss";

class LandingPage extends Component {
  render() {
    return (
      <div className="container-fluid center-div">
        <div className="background-pane">
          <video className="video-bg-elem" preload="auto" loop autoPlay muted>
            <source
              src={require("../assets/images/space.mp4")}
              type="video/mp4"
            />
          </video>
        </div>

        <div className="main-caption">
          <h1 className="display-2">NQME</h1>
          <h3>Queue up Youtube and Spotify</h3>
          <button className="btn btn-outline-light btn-lg m-2">
            Join Room
          </button>
          <button className="btn btn-primary btn-lg m-2">Create Room</button>
        </div>
      </div>
    );
  }
}

export default LandingPage;
