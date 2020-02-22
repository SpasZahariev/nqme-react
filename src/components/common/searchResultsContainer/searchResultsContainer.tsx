import React, { useEffect, useState } from "react";
import "./searchResultsContainer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMeteor } from "@fortawesome/free-solid-svg-icons";
import { faYoutube, faSpotify } from "@fortawesome/free-brands-svg-icons";
import { connect } from "react-redux";
import { Store } from "../objectTypes/store";
import { Song, Brand } from "../objectTypes/song";
import { addSongToQueue } from "redux/actions/roomActions";
import * as roomActions from "../../../redux/actions/roomActions";
import { withApollo } from "react-apollo";

type Props = {
  pin: String;
  searchResults: Song[];
  addSongToQueue: (pin: String, song: Song) => void;
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

  // }, [props.searchResults])
  //break this up
  //make a useEffect call
  //if no songs display a text area with fun facts library
  return props.searchResults.length === 0 ? (<></>) : (
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
              <button className="btn-primary btn-circle" onClick={() => props.addSongToQueue(props.pin, song)}>
                <FontAwesomeIcon icon={faMeteor} color="#d1c7d3" size="2x" />
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
    searchResults: state.searchResults
  }
}

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
  addSongToQueue: (pin: String, song: Song) => dispatch(roomActions.addSongToQueue(ownProps.client, pin, song))
});

// export default withApollo(connect(mapStateToProps, mapDispatchToProps)(LandingPage));
export default withApollo(connect(mapStateToProps, mapDispatchToProps)(SearchResultsContainer));
