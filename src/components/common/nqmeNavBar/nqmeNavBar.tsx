import React from "react";
import "./nqmeNavBar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

type Props = {
  textForUser: string;
  onSearchSong: (evt: any) => void;
  usersInRoom: number;
};

const NqmeNavBar: React.FC<Props> = props => {
  return (
    <div className="container-fluid nav-container">
      <div className="nqme-row">
        <h4 id="logo-header">NQME {props.textForUser}</h4>
        <div className="input-group" id="search-div">
          <input
            type="text"
            className="form-control"
            id="search-input"
            placeholder="Search a song"
          />
          <div className="input-group-append">
            <button
              className="btn btn-primary"
              id="button-input"
              type="button"
              onClick={props.onSearchSong}
            >
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NqmeNavBar;
