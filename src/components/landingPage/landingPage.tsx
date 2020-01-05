import React, { Component } from "react";
import "./landingPage.scss";
import { FlowerSpinner } from "react-epic-spinners";

type Props = {
  onCreate: () => void;
  onJoin: (inputPin: String) => void;
};

class LandingPage extends Component<Props> {
  state = {
    enableInput: false,
    isLoading: false
  };

  render() {
    if (this.state.isLoading) {
      return (
        <div>
          <div className="darken-background" />
          <FlowerSpinner color="#d1c7d3" size={220} className="center-flower" />
        </div>
      );
    }
    return (
      <div className="container-fluid center-div">
        <div className="main-caption">
          {this.isShowingHeader()}

          <button
            className="btn btn-primary btn-lg m-2"
            onClick={this.startLoading}
          >
            Create Room
          </button>
        </div>
      </div>
    );
  }

  startLoading = () => {
    this.setState({ isLoading: true });
    this.props.onCreate();
  };

  //first time join is clicked it shows the input area
  //second time it sends you to the slave page
  handleJoinClick = () => {
    this.setState({ enableInput: true });
  };

  isShowingHeader = () => {
    if (this.state.enableInput) {
      return (
        <div className="input-group-lg room-input col-7 col-md-4 col-lg-3 col-xl-2">
          <input
            type="text"
            className="form-control"
            placeholder="Input 4-symbol Pin"
            onChange={this.checkInputValue}
          />
          <h2>OR</h2>
        </div>
      );
    }
    return (
      <React.Fragment>
        <h1 className="display-2">NQME</h1>
        <h3>Queue up Youtube and Spotify</h3>

        <button
          className="btn btn-outline-light btn-lg m-2"
          type="button"
          onClick={this.handleJoinClick}
        >
          Join Room
          </button>
      </React.Fragment>
    );
  };

  checkInputValue = (evt: React.FormEvent<HTMLInputElement>) => {
    if (evt.currentTarget.value.length === 4) {
      this.setState({ isLoading: true });
      this.props.onJoin(evt.currentTarget.value);
      // axios.get(config.BACKEND_ADDRESS + "\\users").then(res => {
      //   console.log("not parsed", res.data);
      // });
    }
  };
}

export default LandingPage;
