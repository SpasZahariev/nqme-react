import React from "react";
import "./spaceBackground.scss";

const SpaceBackground: React.FC = () => {
  return (
    <div className="background-pane">
      <video className="video-bg-elem" preload="auto" loop autoPlay muted>
        <source src={require("../assets/images/space.mp4")} type="video/mp4" />
      </video>
    </div>
  );
};

export default SpaceBackground;
