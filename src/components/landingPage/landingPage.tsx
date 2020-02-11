import React, { useState } from "react";
import { FlowerSpinner } from "react-epic-spinners";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import * as roomActions from "../../redux/actions/roomActions";
import "./landingPage.scss";
import { Store } from "components/common/objectTypes/store";


interface Props {
  pin: string;
  isLoading: boolean;
  loadRoom: (pin: string) => void
  createRoom: () => void
};

const LandingPage: React.FC<Props> = (props) => {
  const [enableInput, setEnableInput] = useState<boolean>(false);

  const displayInputField = () => {
    return enableInput ? (
      <div className="input-group-lg room-input col-7 col-md-4 col-lg-3 col-xl-2">
        <input
          type="text"
          className="form-control"
          placeholder="Input 4 digits"
          onChange={checkInputValue}
        />
        <h2>OR</h2>
      </div>
    ) : (
        <React.Fragment>
          <h1 className="display-2">NQME</h1>
          <h3>Youtube and Spotify Playlist</h3>
        </React.Fragment>
      );
  };

  //check if 4 sumbols have been inputted yet
  const checkInputValue = (evt: React.FormEvent<HTMLInputElement>) => {
    if (evt.currentTarget.value.length === 4) {
      props.loadRoom(evt.currentTarget.value);
    }
  };


  return props.isLoading ? (
    <div>
      <div className="darken-background" />
      <FlowerSpinner color="#d1c7d3" size={220} className="center-flower" />
    </div>
  ) : (
      <div className="container-fluid center-div">
        {/* if pin exists -> redirect to the room page */}
        {props.pin && <Redirect to={"/room/" + props.pin} />}
        <div className="main-caption">
          {displayInputField()}

          <button
            className="btn btn-primary btn-lg m-2"
            onClick={() => props.createRoom()}
          >
            Create Room
          </button>

          <button
            className="btn btn-outline-light btn-lg m-2"
            type="button"
            disabled={enableInput}
            onClick={() => setEnableInput(true)}
          >
            Join Room
          </button>
        </div>
      </div>
    );
}

const mapStateToProps = (state: Store) => {
  return {
    pin: state.pin,
    isLoading: state.apiCallsInProgress > 0
  }
}

const mapDispatchToProps = {
  loadRoom: roomActions.loadRoom,
  createRoom: roomActions.createRoom
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
