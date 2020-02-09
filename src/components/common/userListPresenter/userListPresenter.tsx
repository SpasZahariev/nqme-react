import React from "react";
import "./userList.scss";

type Props = {
  usernames: string[];
};

const UserList: React.FC<Props> = props => {
  return (
    <div className="nickname-container">
      <div className="nickname-header">
        <h3>Number of Users: {props.usernames.length + 1}</h3>
      </div>
      <div className="nickname-table">
        {/* hardcoded first row for just master */}
        <div className="name-holder first-field">Host</div>
        {props.usernames.map(name => {
          return (
            <div className="name-holder" key={name}>
              {name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserList;
