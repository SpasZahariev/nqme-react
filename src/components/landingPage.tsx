import React, { Component } from "react";
import "./landingPage.scss";

class LandingPage extends Component {
  state = {
    enableInput: false
  };

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
          {this.isShowingHeader()}

          <button className="btn btn-outline-light btn-lg m-2">
            Join Room
          </button>
          <button className="btn btn-primary btn-lg m-2">Create Room</button>
        </div>
      </div>
    );
  }

  isShowingHeader = () => {
    if (this.state.enableInput) {
      return (
        <div className="input-group mb-3 room-input col-7 col-md-4 col-lg-3 col-xl-2">
          <input
            type="text"
            className="form-control"
            placeholder="Input 4-digit Code"
          />
        </div>
      );
    }
    return (
      <React.Fragment>
        <h1 className="display-2">NQME</h1>
        <h3>Queue up Youtube and Spotify</h3>
      </React.Fragment>
    );
  };
}

export default LandingPage;
