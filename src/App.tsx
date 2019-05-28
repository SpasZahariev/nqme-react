import React, { Component } from "react";
import "./App.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter
} from "react-router-dom";
import SpaceBackground from "./components/spaceBackground";
import LandingPage from "./components/landingPage/landingPage";
import MasterPage from "./components/masterPage/masterPage";
import SlavePage from "./components/slavePage/slavePage";
import Error from "./components/error";
import config from "./config.json";
import axios from "axios";

class App extends Component {
  constructor(props: Readonly<{}>) {
    super(props);
  }

  render() {
    return (
      <Router>
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
    const result = axios.post(config.BACKEND_ADDRESS).then(res => {
      const mili1 = Date.now();
      console.log(res);
      console.log("time for creating a room: ", mili1 - mili0, " miliseconds");
    });
  };
}

export default App;
