import React, { Component, useState } from "react";
import "./slavePage.scss";
import "../common/nqmeNavBar/nqmeNavBar";
import NqmeNavBar from "../common/nqmeNavBar/nqmeNavBar";
import YouTube from "react-youtube";
import UserListPresenter from "../common/userListPresenter/userListPresenter";
import SongQueuePresenter from "../common/songQueuePresenter/songQueuePresenter";
import SearchResultsContainer from "../common/searchResultsContainer/searchResultsContainer";
import * as api from "../../apiConnection/stubData";
import { Song } from "components/common/objectTypes/song";
import { connect } from "react-redux";
import { Store } from "components/common/objectTypes/store";
import searchSongs from "../../apiConnection/searchSongs";

interface Props {
  pin: string;
  usernames: string[];
  songs: Song[];
  sessionName: string;
  isLoading: boolean;
};

const youtubeOptions = {
  height: "500",
  width: "100%",

  playerVars: {
    origin: "localhost"
  }
};

const SMALL_SCREEN_WIDTH = 1220;


// const SlavePage: React.FC<Props> = () => {
const SlavePage: React.FC<Props> = (props) => {

  // const [songResultsState, setSongResultsState] = useState<Song[]>([]);

  // const onSearchSong = (text: string) => {
  //   //use the async api call
  //   searchSongs(text)
  //     .then((result: Song[]) => setSongResultsState([...result]))
  //     .catch(err => console.log("error loading songs from api ", err));
  // }

  // the songs played part ensures that the player gets refreshed at the end of a song
  const renderPlayer = () => {
    return (
      <div></div>

      // <div id="music-player">
      //   <YouTube
      //     videoId="3kQXKJJ0nGc"
      //     opts={youtubeOptions}
      //   />
      // </div>
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
    console.log("search Results");
    return (
      <div className="col-md-12 col-xl-5">
        <SearchResultsContainer />
      </div>
    );
  }

  const songQueueBlock = () => {
    console.log("song queue block");
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
    console.log("user list block");
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

  //search results take up all the width and the others -> half the screen
  const smallScreenLayout = () => {
    return (
      <>
        {searchResultsBlock()}
        {songQueueBlock()}
        {userListBlock()}
      </>
    );
  }
  //same but search and Song Aueue columns are swapped
  const normalScreenLayout = () => {
    return (
      <>
        {songQueueBlock()}
        {searchResultsBlock()}
        {userListBlock()}
      </>
    );
  }

  const arangeComponents = () => {
    return (
      <div className="container-fluid row tables-container">
        {window.innerWidth < SMALL_SCREEN_WIDTH ? smallScreenLayout() : normalScreenLayout()}
      </div>
    );
  }

  return (
    <div className="main-container col-lg-12 col-xl-11">
      <NqmeNavBar />
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
    sessionName: state.sessionName,
    isLoading: state.apiCallsInProgress > 0
  }
}

export default connect(mapStateToProps)(SlavePage);
