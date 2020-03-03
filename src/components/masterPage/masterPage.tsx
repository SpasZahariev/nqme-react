import { Song } from "../common/objectTypes/song";
import { Store } from "../common/objectTypes/store";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import YouTube from "react-youtube";
import "../common/nqmeNavBar/nqmeNavBar";
import NqmeNavBar from "../common/nqmeNavBar/nqmeNavBar";
import SearchResultsContainer from "../common/searchResultsContainer/searchResultsContainer";
import SongQueueContainer from "../common/songQueueContainer/songQueueContainer";
import UserListPresenter from "../common/userListPresenter/userListPresenter";
import "./masterPage.scss";
import * as roomActions from "../../redux/actions/roomActions";
import * as usernameActions from "../../redux/actions/usernameActions";
import { withApollo } from "react-apollo";
import io from "socket.io-client";
import { LOCALHOST } from "../../config.json"
import jsonToPlaylist from "../common/utlilityFunctions/jsonToPlayList";
import extractVideoId from "../common/utlilityFunctions/extractVideoId";



interface Props {
  pin: string;
  usernames: string[];
  songs: Song[];
  isLoading: boolean;
  currentlyPlaying: string;
  removeFromQueue: (pin: string, title: string) => void;
  setToLivePlaylist: (songs: Song[]) => void;
  setToLiveUsernames: (usernames: string[]) => void;
  setCurrentlyPlaying: (song: string) => void;
};

const SMALL_SCREEN_WIDTH = 1220;

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


//used in the useEffect hook
let socket: SocketIOClient.Socket;

const MasterPage: React.FC<Props> = (props) => {

  useEffect(() => {
    socket = io(LOCALHOST);
    console.log(socket)


    //called On component unmount hook
    return () => {
      socket.emit("disconnect");
      // socket.off();
    }
  }, []);

  const { songs, usernames, setToLivePlaylist, setToLiveUsernames } = props;
  useEffect(() => {
    socket.on("playlist_channel", (data: any) => {
      console.log("we got something!");
      console.log(JSON.parse(data));
      setToLivePlaylist(jsonToPlaylist(JSON.parse(data)));
    });
  }, [songs, setToLivePlaylist]); //rerun this effect on rerenders only if props.songs has changed

  useEffect(() => {
    socket.on("usernames_channel", (data: any) => {
      console.log("we got userNAMES");
      console.log(data);
      setToLiveUsernames(JSON.parse(data));
    })
  }, [usernames, setToLiveUsernames]);

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

        {/* todo change dequeue song to remove specific song and setCurrent song as first song also when songs is empty load into current song */}
        <YouTube
          videoId={extractVideoId(getCurrentlyPlayingUrl(props.currentlyPlaying))}
          opts={youtubeOptions}
          onReady={event => event.target.playVideo()}
          onEnd={() => handleSongEnded()}
        />
      </div>
    );
  }

  const getCurrentlyPlayingUrl = (currentlyPlaying: string) => {
    // ! is for telling th compiler that I am positive it will never return null
    console.log(props.songs);
    return props.songs.find(song => song.title === currentlyPlaying)!.url;
  }

  const handleSongEnded = () => {
    //logic to play the next song in the queue
    let newSong = props.songs.find(song => song.title !== props.currentlyPlaying);
    props.setCurrentlyPlaying(newSong ? newSong.title : "");

    // props.dequeueSong(props.pin);
    props.removeFromQueue(props.pin, props.currentlyPlaying);
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
          usernames={props.usernames}
          sessionName={"Host"} />
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
        {props.songs.length > 0 && props.currentlyPlaying !== "" ? renderPlayer() : (<></>)}
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
    currentlyPlaying: state.currentlyPlaying,
    isLoading: state.apiCallsInProgress > 0
  }
}

// it is a function that returns functions
const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
  removeFromQueue: (pin: string, title: string) => dispatch(roomActions.removeFromQueue(ownProps.client, pin, title)),
  setCurrentlyPlaying: (title: string) => dispatch(roomActions.setCurrentlyPlaying(title)),
  setToLivePlaylist: (songs: Song[]) => dispatch(roomActions.setToLivePlaylist(songs)),
  setToLiveUsernames: (usernames: string[]) => dispatch(usernameActions.setToLiveUsernames(usernames))
});



export default withApollo(connect(mapStateToProps, mapDispatchToProps)(MasterPage));
