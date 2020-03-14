import { faSpotify, faYoutube } from "@fortawesome/free-brands-svg-icons";
// import { faMeteor } from "@fortawesome/free-solid-svg-icons";
// import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { withApollo } from "react-apollo";
import { connect } from "react-redux";
import * as roomActions from "../../../redux/actions/roomActions";
import { Brand, Song } from "../objectTypes/song";
import { Store } from "../objectTypes/store";
import "./searchResultsContainer.scss";

type Props = {
  pin: string;
  searchResults: Song[];
  songs: Song[];
  addSongToQueue: (pin: string, song: Song) => void;
  setCurrentlyPlaying: (song: string) => void;
  // {
  //   url: string;
  //   title: string;
  //   company: string;
  // }[];
};

const SearchResultsContainer: React.FC<Props> = props => {

  // const [songInfo, setSongInfo] = useState<Song[]>([]);
  // const [textArray, setTextArray] = useState<String[]>(["one", "two", "three"]);

  // useEffect(() => {
  //   console.log("here are the search results: ", props.searchResults);
  //   setSongInfo([...props.searchResults]);
  //   console.log("updated son info: ", songInfo);
  //   console.log("updated son info: ", textArray);

  const handleAddSong = (song: Song) => {
    if (props.songs.length === 0) {
      props.setCurrentlyPlaying(song.title);
    }
    props.addSongToQueue(props.pin, song);
  }
  // }, [props.searchResults])
  //break this up
  //make a useEffect call
  //if no songs display a text area with fun facts library
  return props.searchResults.length === 0 ? (
    <div className="search-result-container">
      <div className="search-result-container-header">
        <span>
          <h3>Thanks for visiting my website!</h3>
          {/* <h5>Meteor songs into the queue</h5> */}
        </span>
      </div>
      <div className="tutorial-holder" >
        <span>
          Your search results will display here. Pick one and it will be added to the
          <span className="almost-white-text"> Room</span> <span className="accent-text">Queue </span>
          playlist.
        </span>
      </div>
    </div>
  ) : (
      <div className="search-result-container">
        <div className="search-result-container-header">
          <span>
            <h3>Search Results</h3>
            {/* <h5>Meteor songs into the queue</h5> */}
          </span>
        </div>
        <div className="search-result-table">
          {props.searchResults.map(song => {
            return (
              <div className="search-result-holder" key={song.url}>
                {song.company === Brand.YOUTUBE ? (<FontAwesomeIcon icon={faYoutube} className="corporation-icon" color="#ff0000" size="2x" />
                ) : (<FontAwesomeIcon icon={faSpotify} className="corporation-icon" color="#84bd00" size="2x" />
                  )}
                <div className="song-name">
                  <p>
                    {song.title}
                  </p>
                </div>
                <button className="btn-primary btn-circle" onClick={() => handleAddSong(song)}>
                  <FontAwesomeIcon icon={faPlus} color="#d1c7d3" size="2x" />
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
    searchResults: state.searchResults,
    songs: state.songs
  }
}

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
  addSongToQueue: (pin: string, song: Song) => dispatch(roomActions.addSongToQueue(ownProps.client, pin, song)),
  setCurrentlyPlaying: (title: string) => dispatch(roomActions.setCurrentlyPlaying(title))
});

// export default withApollo(connect(mapStateToProps, mapDispatchToProps)(LandingPage));
export default withApollo(connect(mapStateToProps, mapDispatchToProps)(SearchResultsContainer));
