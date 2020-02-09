import React, { Component } from "react";
import "./masterPage.scss";
import "../common/nqmeNavBar/nqmeNavBar";
import NqmeNavBar from "../common/nqmeNavBar/nqmeNavBar";
import YouTube from "react-youtube";
import UserList from "../common/userListPresenter/userListPresenter";
import SongQueue from "../common/songQueuePresenter/songQueuePresenter";
import SearchResults from "../common/searchResultsPresenter/searchResultsPresenter";


const SMALL_SCREEN_WIDTH = 1220;

type Props = {
  room: any;
};

const youtubeOptions = {
  height: "500",
  width: "100%",

  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    // autoplay: 1
    // color: "white",
    // iv_load_policy: 3,
    origin: "localhost"
  }
};

const MasterPage: React.FC<Props> = () => {

  const onSearchSong = (evt: any) => {
    evt.preventDefault();
    // todo
    console.log("you serached a song!");
  }

  // the songs played part ensures that the player gets refreshed at the end of a song
  const renderPlayer = () => {
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
        // STOP THIS LINE FOR NOW
        // onReady={event => event.target.playVideo()}
        // onEnd=({this._onEnd})
        />
      </div>
    );
  }

  const searchResultsBlock = () => {
    <div className="col-md-12 col-xl-5">
      <SearchResults
        songs={[
        ]}
      />
    </div>
  }

  const songQueueBlock = () => {
    <div className="col-sm-12 col-lg-6 col-xl-3">
      <SongQueue
        roomCode="r2d2"
        queue={[
        ]}
      />
    </div>
  }

  const userListBlock = () => {
    <div className="col-sm-12 col-lg-6 col-xl-3">
      <UserList
        usernames={[
        ]}
      />
    </div>
  }

  const smallScreenLayout = () => {
    return (
      <>
        {searchResultsBlock}
        {songQueueBlock}
        {userListBlock}
      </>
    );
  }
  //same but search and Song Aueue columns are swapped
  const normalScreenLayout = () => {
    return (
      <>
        {songQueueBlock}
        {searchResultsBlock}
        {userListBlock}
      </>
    );
  }

  const arangeComponents = () => {
    // return this.smallScreenLayout();
    return (
      <div className="container-fluid row tables-container">
        {window.innerWidth < SMALL_SCREEN_WIDTH ? smallScreenLayout() : normalScreenLayout()}
      </div>
    );
  }

  return (
    <div className="main-container col-lg-12 col-xl-11">
      <NqmeNavBar
        textForUser="Host"
        onSearchSong={onSearchSong}
      />
      <div className="content-container">
        <div>{renderPlayer()}</div>
        {arangeComponents()}
      </div>
    </div>
  );
}


export default MasterPage;
