import { faCog, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ChangeEvent, useState } from "react";
import { connect } from "react-redux";
import "../../../assets/styles/colors.scss";
import * as searchActions from "../../../redux/actions/searchActions";
import { Store } from "../objectTypes/store";
import "./nqmeNavBar.scss";

type Props = {
  sessionName: string;
  onSearchSong: (word: string, sessionName: string) => void;
};

// type State = {
//   isDropped: boolean;
// };

const NqmeNavBar: React.FC<Props> = (props) => {
  // constructor(props: Props) {
  //   super(props);
  //   this.state = { isDropped: false };
  // }

  const [searchText, setSearchText] = useState('');

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    // console.log(evt.target.value);
    setSearchText(evt.target.value);
  }
  const handleSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();
    props.onSearchSong(searchText, props.sessionName);
    setSearchText('');
  }

  // render() {
  return (
    <div className="container-fluid nav-container">
      <div className="nqme-row">
        {/* on navlink click - wipe the global state*/}
        <a href="/home" className="nqme-nav-link">
          <h4 id="logo-header">
            <span id="text-4-user">
              {/* prepend with NQME if it is the master page */}
              {props.sessionName === "Host" ? <>NQME </> : <></>}
            </span>
            <span>{props.sessionName}</span>
          </h4>
        </a>
        <form className="col-10 col-sm-10 col-md-5 col-lg-7" onSubmit={handleSubmit}>
          <div className="input-group" id="search-div">

            <input
              type="text"
              className="form-control"
              id="search-input"
              placeholder="Search for a Song"
              value={searchText}
              onChange={handleChange}
            />
            <div className="input-group-append">
              <button
                className="btn btn-primary"
                id="button-input"
                type="submit"
                value="Submit"
              >
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
          </div>
        </form>
        <div>
          <button
            className="btn"
            id="cogwheel"
            data-toggle="dropdown-menu"
            aria-expanded="false"
          // onClick={toggleDropDown}
          // onClick=
          >
            <FontAwesomeIcon icon={faCog} color="#d1c7d3" size="lg" />

          </button>

          {/* <div
              className={this.getDropDownClass()}
              aria-labelledby="cogwheel"
              id="dropdown-div"
            > */}
          {/* <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="defaultUnchecked"
                />
                <label className="custom-control-label">
                  Default unchecked
                </label>
              </div>
              <input
                type="checkbox"
                className="custom-control-input dropdown-item"
                id="defaultIndeterminate2"
                checked
              />
              <a className="dropdown-item" href="#">
                Something else here
              </a> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state: Store) => {
  return {
    sessionName: state.sessionName
  }
}

const mapDispatchToProps = {
  onSearchSong: searchActions.searchForSongs
}

export default connect(mapStateToProps, mapDispatchToProps)(NqmeNavBar);
