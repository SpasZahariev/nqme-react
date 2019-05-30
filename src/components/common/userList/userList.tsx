import React from "react";
import "./userList.scss";

type Props = {
  nicknames: string[];
};

const UserList: React.FC<Props> = props => {
  return (
    <div className="nickname-container">
      <div className="nickname-header">
        <h3>Users: {props.nicknames.length + 1}</h3>
      </div>
      <div className="nickname-table">
        <div className="name-holder first-field">Host</div>
        <hr />
        {props.nicknames.map(name => {
          return (
            <div>
              <div className="name-holder" key={name}>
                {name}
              </div>
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserList;
