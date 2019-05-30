import React, { Component } from "react";
import Room from "../common/room";
import "./masterPage.scss";
import "../common/nqmeNavBar/nqmeNavBar";
import NqmeNavBar from "../common/nqmeNavBar/nqmeNavBar";

type Props = {
  room: Room;
};

class MasterPage extends Component<Props> {
  render() {
    return (
      <div className="main-container col-lg-12 col-xl-9">
        {/* <div className="container-fluid nav-container">
          <span>
            <h4>NQME</h4>
          </span>
        </div> */}
        <NqmeNavBar
          textForUser="Master"
          onSearchSong={this.onSearchSong}
          usersInRoom={2}
        />
        <div className="container-fluid content-container">
          <h1>more Stuff</h1>
        </div>
        {/* <div className="custom-nav">
          <span>NQME</span>
        </div>
        <div className="container-fluid content-container">
          <h1>You tube test machine</h1>
          <h1>{this.props.room._id}</h1>
          <img src="https://picsum.photos/500/900" alt="idk is this ok" />
        </div> */}
      </div>
    );
  }

  onSearchSong(evt: any) {
    evt.preventDefault();
    // todo
    console.log("you serached a song!");
  }
}

export default MasterPage;
