import React, { Component } from "react";
import "./masterPage.scss";
import "../common/nqmeNavBar/nqmeNavBar";
import NqmeNavBar from "../common/nqmeNavBar/nqmeNavBar";
import YouTube from "react-youtube";
import UserListPresenter from "../common/userListPresenter/userListPresenter";
import SongQueuePresenter from "../common/songQueuePresenter/songQueuePresenter";
import SearchResultsPresenter from "../common/searchResultsPresenter/searchResultsPresenter";
import { connect } from "react-redux";
import { Song } from "components/common/objectTypes/song";
import { Store } from "components/common/objectTypes/store";



interface Props {
  pin: string;
  usernames: string[];
  songs: Song[];
  isLoading: boolean;
};

const SMALL_SCREEN_WIDTH = 1220;

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

const MasterPage: React.FC<Props> = (props) => {

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

  //function that hashes strings into hex color values
  const usernameToHex = (username: string) => {
    let hash = 0;
    for (var i = 0; i < username.length; i++) {
      hash = username.charCodeAt(i) + ((hash << 5) - hash);
    }
    var colour = '#';
    for (var i = 0; i < 3; i++) {
      var value = (hash >> (i * 8)) & 0xFF;
      colour += ('00' + value.toString(16)).substr(-2);
    }
    return colour;
  }

  const searchResultsBlock = () => {
    return (
      <div className="col-md-12 col-xl-5">
        <SearchResultsPresenter
          songs={props.songs.map(song => {
            return {
              url: song.url,
              title: song.title,
              company: song.company
            }
          })}
        />
      </div>
    );
  }

  const songQueueBlock = () => {
    return (
      <div className="col-sm-12 col-lg-6 col-xl-3">
        <SongQueuePresenter
          roomCode={props.pin}
          queue={props.songs.map(song => {
            return {
              title: song.title,
              likes: song.likes,
              hexColor: usernameToHex(song.username)
            }
          })}
        />
      </div>
    );
  }

  const userListBlock = () => {
    return (
      <div className="col-sm-12 col-lg-6 col-xl-3">
        <UserListPresenter
          users={props.usernames.map(username => {
            return {
              username,
              hexColor: usernameToHex(username)
            }
          })}
        />
      </div>
    );
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

const mapStateToProps = (state: Store) => {
  return {
    pin: state.pin,
    usernames: state.usernames,
    songs: state.songs,
    isLoading: state.apiCallsInProgress > 0
  }
}


export default connect(mapStateToProps)(MasterPage);
