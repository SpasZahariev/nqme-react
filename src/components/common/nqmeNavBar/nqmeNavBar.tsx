import React, { Component } from "react";
import "./nqmeNavBar.scss";
import "../../../assets/styles/colors.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCog } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

type Props = {
  textForUser: string;
  onSearchSong: (evt: any) => void;
};

type State = {
  isDropped: boolean;
};

const NqmeNavBar: React.FC<Props> = (props) => {
  // constructor(props: Props) {
  //   super(props);
  //   this.state = { isDropped: false };
  // }

  // render() {
  return (
    <div className="container-fluid nav-container">
      <div className="nqme-row">
        <NavLink to="/" activeClassName="nqme-nav-link">
          <h4 id="logo-header">
            <span id="text-4-user">
              {/* prepend with NQME if it is the master page */}
              {props.textForUser == "Host" ? <>NQME </> : <></>}
            </span>
            <span>{props.textForUser}</span>
          </h4>
        </NavLink>
        <form className="col-10 col-sm-10 col-md-5 col-lg-7">
          <div className="input-group" id="search-div">

            <input
              type="text"
              className="form-control"
              id="search-input"
              placeholder="Search for a Song"
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

// toggleDropDown = () => {
//   this.setState({ isDropped: !this.state.isDropped });
// };

// getDropDownClass = () => {
//   // return `dropdown-menu${this.state.isDropped ? " show" : ""}`;
//   return this.state.isDropped ? "dropdown-menushow" : "dropdown-menu";
// };
// }

export default NqmeNavBar;
