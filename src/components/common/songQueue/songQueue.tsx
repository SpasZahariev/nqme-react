import React from "react";
import "./songQueue.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartbeat } from "@fortawesome/free-solid-svg-icons";

type Props = {
  roomCode: string;
  queue: {
    name: string;
    likes: number;
  }[];
};

const SongQueue: React.FC<Props> = props => {
  return (
    <div className="queue-container">
      <div className="queue-container-header">
        <span>
          <h3>Room Code: <span className="accented-text">{props.roomCode}</span></h3>
          {/* <h5>Meteor songs into the queue</h5> */}
        </span>
      </div>
      <div className="queue-table">
        {props.queue.map(song => {
          return (
            <div className="queue-holder" key={song.name}>
              <div className="song-name">
                <p>
                  {song.name}
                </p>
              </div>
              <button className="btn-primary btn-beat">
                <span className="num-likes">
                  {song.likes}
                </span>
                <FontAwesomeIcon icon={faHeartbeat} color="#d1c7d3" size="lg" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SongQueue;
