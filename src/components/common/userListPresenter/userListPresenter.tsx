import React from "react";
import "./userListPresenter.scss";

type Props = {
  users: {
    username: string;
    hexColor: string;
  }[];
};

const UserListPresenter: React.FC<Props> = props => {
  return (
    <div className="nickname-container">
      <div className="nickname-header">
        <h3>Number of Users: <span className="accented-text">{props.users.length}</span></h3>
      </div>
      <div className="nickname-table">
        {/* hardcoded first row for just master */}
        {/* <div className="name-holder first-field">Host</div> */}
        {props.users.map(user => {
          return (
            <div className="name-holder" style={{ borderLeftColor: user.hexColor }} key={user.username}>
              {user.username}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default UserListPresenter;