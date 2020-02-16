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

class NqmeNavBar extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { isDropped: false };
  }

  render() {
    return (
      <div className="container-fluid nav-container">
        <div className="nqme-row">
          <NavLink to="/" activeClassName="nqme-nav-link">
            <h4 id="logo-header">
              NQME <span id="text-4-user">{this.props.textForUser}</span>
            </h4>
          </NavLink>
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
                onClick={this.props.onSearchSong}
              >
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
          </div>
          <div>
            <button
              className="btn"
              id="cogwheel"
              data-toggle="dropdown-menu"
              aria-expanded="false"
              onClick={this.toggleDropDown}
            >
              <FontAwesomeIcon icon={faCog} color="#d1c7d3" size="lg" />

            </button>

            <div
              className={this.getDropDownClass()}
              aria-labelledby="cogwheel"
              id="dropdown-div"
            >
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
            </div>
          </div>
        </div>
      </div>
    );
  }

  toggleDropDown = () => {
    this.setState({ isDropped: !this.state.isDropped });
  };

  getDropDownClass = () => {
    // return `dropdown-menu${this.state.isDropped ? " show" : ""}`;
    return this.state.isDropped ? "dropdown-menushow" : "dropdown-menu";
  };
}

export default NqmeNavBar;
