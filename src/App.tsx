import React, { Component } from "react";
import "./App.scss";
import { Router, Switch, Route } from "react-router-dom";
import SpaceBackground from "./components/spaceBackground";
import LandingPage from "./components/landingPage/landingPage";
import MasterPage from "./components/masterPage/masterPage";
import SlavePage from "./components/slavePage/slavePage";
import Error from "./components/error";
import config from "./config.json";
import axios from "axios";
import history from "./components/common/history";
import Room from "./components/common/room";

class App extends Component {
  state = {
    room: {}
  };

  render() {
    return (
      <Router history={history}>
        <SpaceBackground />
        <Switch>
          <Route
            path="/"
            exact
            component={() => <LandingPage onCreate={this.handleCreateRoom} />}
          />
          <Route path="/master/:id" component={MasterPage} />
          <Route path="/room/:id" component={SlavePage} />
          <Route component={Error} />
        </Switch>
      </Router>
    );
  }

  handleCreateRoom = () => {
    console.log("call the backend and create the room");
    const mili0 = Date.now();
    axios.post(config.BACKEND_ADDRESS).then(res => {
      const mili1 = Date.now();
      console.log(res);
      this.roomToState(res.data.success);
      console.log("time for creating a room: ", mili1 - mili0, " miliseconds");
      history.push("/master/" + res.data.success.room._id);
    });
  };

  //this is suspiciously working
  roomToState = (data: Room) => {
    const room: Room = data;
    console.log("lol is this working", room);
    this.setState(room);
  };
}

export default App;
