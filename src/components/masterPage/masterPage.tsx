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
import extractVideoId from "components/common/utlilityFunctions/extractVideoId";
import * as roomActions from "../../redux/actions/roomActions";
import { withApollo } from "react-apollo";



interface Props {
  pin: string;
  usernames: string[];
  songs: Song[];
  isLoading: boolean;
  dequeueSong: (pin: string) => void;
};

const SMALL_SCREEN_WIDTH = 1220;

// const playerVars = {
//   // autoplay: 1,
//   // color: "red",
//   origin: "localhost"
// }
const youtubeOptions = {
  height: "500",
  width: "100%",

  playerVars: {
    origin: "localhost",
    iv_load_policy: 3 as 3,
    autoplay: 1 as 1,
    modestbranding: 1 as 1,
    fs: 0 as 0
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
      <div id="music-player" className="player-wrapper">
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
          videoId={extractVideoId(props.songs[0].url)}
          opts={youtubeOptions}
          onReady={event => event.target.playVideo()}
          onEnd={() => props.dequeueSong(props.pin)}
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
        {/* maybe I can put a gif or a cool picture on the display when there aren't any songs to play */}
        {props.songs.length > 0 ? renderPlayer() : (<></>)}
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

// it is a function that returns functions
const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
  dequeueSong: (pin: string) => dispatch(roomActions.dequeueSong(ownProps.client, pin))
});



export default withApollo(connect(mapStateToProps, mapDispatchToProps)(MasterPage));
