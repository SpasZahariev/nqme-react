import React, { Component } from "react";
import "./App.scss";
import config from "./config.json";
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

class App extends Component {
  // constructor(props: Readonly<{}>) {
  //   super(props);
  // }

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
          <Route path="/:id" component={SlavePage} />
        </Switch>
      </Router>
    );
  }

  handleCreateRoom = () => {
    console.log("call the backend and create the room");
  };
}

export default App;
