import React from "react";
import "./userListPresenter.scss";
import { usernameToHex } from "../../common/utlilityFunctions/usernameToHex"

type Props = {
  usernames: string[];
  sessionName: string;
};

const UserListPresenter: React.FC<Props> = props => {
  return (
    <div className="nickname-container">
      <div className="nickname-header">
        <h3>Number of Users: <span className="accented-text">{props.usernames.length}</span></h3>
      </div>
      <div className="nickname-table">
        {/* hardcoded first row for just master */}
        {/* <div className="name-holder first-field">Host</div> */}
        {props.usernames.map(username => {
          return (
            <div className="name-holder" style={{ borderLeftColor: usernameToHex(username) }} key={username}>
              {username === props.sessionName ? <span className="accented-session-name">{username}</span> : <span>{username}</span>}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default UserListPresenter;
