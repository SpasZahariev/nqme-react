import React from "react";
import "./searchResultsPresenter.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMeteor } from "@fortawesome/free-solid-svg-icons";
import { faYoutube, faSpotify } from "@fortawesome/free-brands-svg-icons";

type Props = {
  songs: {
    url: string;
    title: string;
    company: string;
  }[];
};

const SearchResultsPresenter: React.FC<Props> = props => {
  return (
    <div className="search-result-container">
      <div className="search-result-container-header">
        <span>
          <h3>Search Results</h3>
          {/* <h5>Meteor songs into the queue</h5> */}
        </span>
      </div>
      <div className="search-result-table">
        {props.songs.map(song => {
          return (
            <div className="search-result-holder" key={song.url}>
              {song.company === "Youtube" ? (<FontAwesomeIcon icon={faYoutube} className="corporation-icon" color="#ff0000" size="2x" />
              ) : (<FontAwesomeIcon icon={faSpotify} className="corporation-icon" color="#84bd00" size="2x" />
                )}
              <div className="song-name">
                <p>
                  {song.title}
                </p>
              </div>
              <button className="btn-primary btn-circle">
                <FontAwesomeIcon icon={faMeteor} color="#d1c7d3" size="2x" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchResultsPresenter;
