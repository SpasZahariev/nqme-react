import React from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import "./App.scss";
import SpaceBackground from "./components/common/background/spaceBackground";
import Error from "./components/common/errorPage/error";
import LandingPage from "./components/landingPage/landingPage";
import MasterPage from "./components/masterPage/masterPage";
import SlavePage from "./components/slavePage/slavePage";
import { Store } from "components/common/objectTypes/store";


interface Props {
  sessionName: string;
}

const HOST: string = "Host"

const App: React.FC<Props> = (props) => {
  return (
    <>
      <SpaceBackground />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/room/:id" component={() => props.sessionName == HOST ? <MasterPage /> : <SlavePage />} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

const mapStateToProps = (state: Store) => {
  return {
    sessionName: state.sessionName
  }
}

export default connect(mapStateToProps)(App);

