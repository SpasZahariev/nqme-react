import React from "react";
import "./searchResults.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMeteor } from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";

type Props = {
  songs: {
    link: string;
    name: string;
    corporation: string;
  }[];
};

// const GetBrand: any = (corporation: String) => {
//   console.log(corporation);
//   if (corporation == { "corporation": "Youtube" }) {
//     return (
//       <label>
//         <FontAwesomeIcon icon={faYoutube} color="#ff0000" size="lg" />
//       </label>
//     );
//   } else {
//     return (
//       <label>
//         <FontAwesomeIcon icon={faSpotify} color="#ff0000" size="lg" />
//       </label>
//     );
//   }
// }

const SearchResults: React.FC<Props> = props => {
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
            <div className="search-result-holder" key={song.link}>
              {/* <span> */}
              {song.corporation == "Youtube" ? (<FontAwesomeIcon icon={faYoutube} className="corporation-icon" color="#ff0000" size="2x" />
              ) : (<FontAwesomeIcon icon={faSpotify} className="corporation-icon" color="#84bd00" size="2x" />
                )}
              {/* </span> */}
              <div className="song-name">
                <p>
                  {song.name}
                </p>
              </div>
              {/* <div> */}
              <button className="btn-primary btn-circle">
                <FontAwesomeIcon icon={faMeteor} color="#d1c7d3" size="2x" />
              </button>
              {/* </div> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchResults;
