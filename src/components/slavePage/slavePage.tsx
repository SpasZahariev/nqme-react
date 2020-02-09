import React, { Component } from "react";
import "./slavePage.scss";
import "../common/nqmeNavBar/nqmeNavBar";
import NqmeNavBar from "../common/nqmeNavBar/nqmeNavBar";
import YouTube from "react-youtube";
import UserList from "../common/userListPresenter/userListPresenter";
import SongQueue from "../common/songQueuePresenter/songQueuePresenter";
import SearchResults from "../common/searchResultsPresenter/searchResultsPresenter";

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

class SlavePage extends Component<Props> {
  render() {
    return (
      // <div className="main-container col-lg-12 col-xl-9">
      <div className="main-container col-lg-12 col-xl-11">
        <NqmeNavBar
          textForUser="Host"
          onSearchSong={this.onSearchSong}
          usersInRoom={2}
        />
        <div className="content-container">
          <div>{this.renderPlayer()}</div>
          {this.arangeComponents()}
        </div>
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
        // STOP THIS LINE FOR NOW
        // onReady={event => event.target.playVideo()}
        // onEnd=({this._onEnd})
        />
      </div>
    );
  }

  arangeComponents = () => {
    // return this.smallScreenLayout();
    return window.innerWidth < 1220 ? this.smallScreenLayout() : this.normalScreenLayout();
  }

  //same but search and Song Aueue columns are swapped
  smallScreenLayout = () => {
    return (
      <div className="container-fluid row tables-container">
        <div className="col-md-12 col-xl-5">
          <SearchResults
            songs={[
              {
                link: "https://www.youtube.com/watch?v=aJ5IzGBnWAc&list=LLeXLB3ZQ7DN1FrFLA0KHKuQ&index=4&t=0s",
                name: "The Score - Born For This (Audio)",
                corporation: "Youtube"
              },
              {
                link: "https://www.youtube.com/watch?v=4DQ-2tDzJxw&list=LLeXLB3ZQ7DN1FrFLA0KHKuQ&index=14",
                name: "grandson - Thoughts and Prayers (Official Audio)",
                corporation: "Youtube"
              },
              {
                link: "https://www.youtube.com/watch?v=4DQ-2tDzJxw&list=LLeXLB3ZQ7DN1FrFLA0KHKuQ&index=14",
                name: "You Me At Six - Fast Forward (Official Audio)",
                corporation: "Youtube"
              },
              {
                link: "https://www.youtube.com/watch?v=4DQ-2tDzJxw&list=LLeXLB3ZQ7DN1FrFLA0KHKuQ&index=14",
                name: "blackbear - hot girl bummer low budget video",
                corporation: "Youtube"
              },
              {
                link: "https://www.youtube.com/watch?v=4DQ-2tDzJxw&list=LLeXLB3ZQ7DN1FrFLA0KHKuQ&index=14",
                name: "The Girl from Ipanema - Stan Getz & Astrud Gilberto (cover by Elise)",
                corporation: "Youtube"
              }
            ]}
          />
        </div>

        <div className="col-sm-12 col-lg-6 col-xl-3">
          <SongQueue
            roomCode="r2d2"
            queue={[
              {
                name: "The Score - Born For This (Audio)",
                likes: 7
              },
              {
                name: "You Me At Six - Fast Forward (Official Audio)",
                likes: 2
              }
            ]}
          />
        </div>

        <div className="col-sm-12 col-lg-6 col-xl-3">
          <UserList
            nicknames={[
              "Spas",
              "Mark Antonie",
              "doe",
              "Jane",
              "dog",
              "cat"
            ]}
          />
        </div>
      </div>
    );
  }

  normalScreenLayout = () => {
    return (
      <div className="container-fluid row tables-container">
        <div className="col-sm-12 col-lg-6 col-xl-3">
          <SongQueue
            roomCode="r2d2"
            queue={[
              {
                name: "The Score - Born For This (Audio)",
                likes: 7
              },
              {
                name: "You Me At Six - Fast Forward (Official Audio)",
                likes: 2
              }
            ]}
          />
        </div>
        <div className="col-md-12 col-xl-5">
          <SearchResults
            songs={[
              {
                link: "https://www.youtube.com/watch?v=aJ5IzGBnWAc&list=LLeXLB3ZQ7DN1FrFLA0KHKuQ&index=4&t=0s",
                name: "The Score - Born For This (Audio)",
                corporation: "Youtube"
              },
              {
                link: "https://www.youtube.com/watch?v=4DQ-2tDzJxw&list=LLeXLB3ZQ7DN1FrFLA0KHKuQ&index=14",
                name: "grandson - Thoughts and Prayers (Official Audio)",
                corporation: "Youtube"
              },
              {
                link: "https://www.youtube.com/watch?v=4DQ-2tDzJxw&list=LLeXLB3ZQ7DN1FrFLA0KHKuQ&index=14",
                name: "You Me At Six - Fast Forward (Official Audio)",
                corporation: "Youtube"
              },
              {
                link: "https://www.youtube.com/watch?v=4DQ-2tDzJxw&list=LLeXLB3ZQ7DN1FrFLA0KHKuQ&index=14",
                name: "blackbear - hot girl bummer low budget video",
                corporation: "Youtube"
              },
              {
                link: "https://www.youtube.com/watch?v=4DQ-2tDzJxw&list=LLeXLB3ZQ7DN1FrFLA0KHKuQ&index=14",
                name: "The Girl from Ipanema - Stan Getz & Astrud Gilberto (cover by Elise)",
                corporation: "Youtube"
              }
            ]}
          />
        </div>
        <div className="col-sm-12 col-lg-6 col-xl-3">
          <UserList
            nicknames={[
              "Spas",
              "Mark Antonie",
              "doe",
              "Jane",
              "dog",
              "cat"
            ]}
          />
        </div>
      </div>
    );
  }
}

export default SlavePage;
