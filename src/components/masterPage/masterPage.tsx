import { Song } from "components/common/objectTypes/song";
import { Store } from "components/common/objectTypes/store";
import React from "react";
import { connect } from "react-redux";
import YouTube from "react-youtube";
import "../common/nqmeNavBar/nqmeNavBar";
import NqmeNavBar from "../common/nqmeNavBar/nqmeNavBar";
import SearchResultsContainer from "../common/searchResultsContainer/searchResultsContainer";
import SongQueueContainer from "../common/songQueueContainer/songQueueContainer";
import UserListPresenter from "../common/userListPresenter/userListPresenter";
import "./masterPage.scss";



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
  // const [songResultsState, setSongResultsState] = useState<Song[]>([]);

  // const onSearchSong = (text: string) => {
  //   //use the async api call
  //   searchSongs(text)
  //     .then((result: Song[]) => {
  //       console.log("just the results ", result);
  //       setSongResultsState(result)
  //       console.log("song results State", songResultsState);
  //     })
  //     .catch(err => console.log("error loading songs from api ", err));
  // }

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

  //TODO will need to pass the results from the function called by NavBar
  const searchResultsBlock = () => {
    return (
      <div className="col-md-12 col-xl-5">
        <SearchResultsContainer />
      </div>
    );
  }

  const songQueueBlock = () => {
    return (
      <div className="col-sm-12 col-lg-6 col-xl-3">
        <SongQueueContainer />
      </div>
    );
  }

  const userListBlock = () => {
    return (
      <div className="col-sm-12 col-lg-6 col-xl-3">
        <UserListPresenter
          usernames={props.usernames} />
      </div>
    );
  }

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
    // return this.smallScreenLayout();
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
    isLoading: state.apiCallsInProgress > 0
  }
}


export default connect(mapStateToProps)(MasterPage);
