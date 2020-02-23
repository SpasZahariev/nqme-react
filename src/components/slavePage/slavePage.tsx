import { Song } from "components/common/objectTypes/song";
import { Store } from "components/common/objectTypes/store";
import React from "react";
import { FlowerSpinner } from "react-epic-spinners";
import { connect } from "react-redux";
import "../common/nqmeNavBar/nqmeNavBar";
import NqmeNavBar from "../common/nqmeNavBar/nqmeNavBar";
import SearchResultsContainer from "../common/searchResultsContainer/searchResultsContainer";
import SongQueueContainer from "../common/songQueueContainer/songQueueContainer";
import UserListPresenter from "../common/userListPresenter/userListPresenter";
import "./slavePage.scss";

interface Props {
  pin: string;
  usernames: string[];
  songs: Song[];
  sessionName: string;
  isLoading: boolean;
};

// const youtubeOptions = {
//   height: "500",
//   width: "100%",

//   playerVars: {
//     origin: "localhost"
//   }
// };

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
        <UserListPresenter usernames={props.usernames} />
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

  return props.isLoading ? (<div>
    <div className="darken-background" />
    <FlowerSpinner color="#d1c7d3" size={220} className="center-flower" />
  </div>
  ) : (
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
