import React from "react";
import "./songQueueContainer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartbeat } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { Store } from "../objectTypes/store";
import * as roomActions from "../../../redux/actions/roomActions"
import { withApollo } from "react-apollo";
import { usernameToHex } from "../utlilityFunctions/usernameToHex"
import { Song } from "../objectTypes/song";

type Props = {
  pin: string;
  songs: Song[];
  currentlyPlaying: string;
  likedTitles: string[];
  likeSong: (pin: string, title: string) => void;
};

const SongQueueContainer: React.FC<Props> = props => {

  const handleLike = (title: string) => {
    // enforce one like per song (have some mercy on the websockets)
    if (!props.likedTitles.includes(title)) {
      props.likeSong(props.pin, title);
    }
  }


  return (
    <div className="queue-container">
      <div className="queue-container-header">
        <span>
          <h3>Room Code: <span className="accented-text">{props.pin}</span></h3>
          {/* <h5>Meteor songs into the queue</h5> */}
        </span>
      </div>
      <div className="queue-table">
        {props.currentlyPlaying ? <div className="current-song song-name">
          <p>
            {props.currentlyPlaying}
          </p>
        </div> : <> </>
        }
        {props.songs
          .filter(song => song.title !== props.currentlyPlaying)
          .map(song => {
            return (
              <div className="queue-holder" style={{ borderLeftColor: usernameToHex(song.username) }} key={song.title} >
                <div className="song-name">
                  <p>
                    {song.title}
                  </p>
                </div>
                <button className="btn-primary btn-beat shadow-none" onClick={() => handleLike(song.title)}>
                  <span className="num-likes">
                    {song.likes}
                  </span>
                  <FontAwesomeIcon icon={faHeartbeat} color="#d1c7d3" size="lg" />
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

const mapStateToProps = (state: Store) => {
  return {
    pin: state.pin,
    songs: state.songs,
    currentlyPlaying: state.currentlyPlaying,
    likedTitles: state.likedTitles
  }
}

// it is a function that returns functions
const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
  likeSong: (pin: string, title: string) => dispatch(roomActions.likeSong(ownProps.client, pin, title))
});


export default withApollo(connect(mapStateToProps, mapDispatchToProps)(SongQueueContainer));
