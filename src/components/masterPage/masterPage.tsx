import React, { Component } from "react";
import Room from "../common/room";
import "./masterPage.scss";
import "../common/nqmeNavBar/nqmeNavBar";
import NqmeNavBar from "../common/nqmeNavBar/nqmeNavBar";
import YouTube from "react-youtube";

type Props = {
  room: Room;
};

const youtubeOptions = {
  height: "500",
  width: "100%",

  PlayerVars: {
    // https://developers.google.com/youtube/player_parameters
    // autoplay: 1
    color: "white",
    iv_load_policy: 3
  }
};

class MasterPage extends Component<Props> {
  render() {
    return (
      <div className="main-container col-lg-12 col-xl-9">
        <NqmeNavBar
          textForUser="Master"
          onSearchSong={this.onSearchSong}
          usersInRoom={2}
        />
        <div className="content-container">{this.renderPlayer()}</div>
      </div>
    );
  }

  onSearchSong(evt: any) {
    evt.preventDefault();
    // todo
    console.log("you serached a song!");
  }

  // the songs played part ensures that the player gets refreshed at the end of a song
  renderPlayer() {
    return (
      <div id="music-player">
        {/* {this.state.currentSong.type === "s" && spotifyApi.getAccessToken() && (
          <SpotifyPlayer
            spotifyToken={spotifyApi.getAccessToken()}
            songUri={this.state.currentSong.url}
            songName={this.state.currentSong.name}
            next={this._onEnd}
          />
        )} */}

        {/* {this.state.currentSong.type === "y" && (
          <YouTube
            videoId={this.state.currentSong.url}
            opts={youtubeOptions}
            onEnd={this._onEnd}
          />
        )} */}

        <YouTube
          // videoId={this.state.currentSong.url}
          videoId="3kQXKJJ0nGc"
          opts={youtubeOptions}
          onReady={event => event.target.playVideo()}
          // onEnd=({this._onEnd})
        />
      </div>
    );
  }
}

export default MasterPage;
