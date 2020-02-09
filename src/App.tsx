import React, { Component } from "react";
import "./App.scss";
import { Router, Switch, Route } from "react-router-dom";
import SpaceBackground from "./components/common/background/spaceBackground";
import LandingPage from "./components/landingPage/landingPage";
import MasterPage from "./components/masterPage/masterPage";
import SlavePage from "./components/slavePage/slavePage";
import Error from "./components/common/errorPage/error";
import { connect } from "react-redux";



interface Props {
  isMaster: boolean;
}

const App: React.FC<Props> = (props) => {
  return (
    <>
      <SpaceBackground />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/room/:id" component={() => props.isMaster ? <MasterPage /> : <SlavePage />} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

const mapStateToProps = (state: any) => {
  return {
    isMaster: state.isMaster
  }
}

export default connect(mapStateToProps)(App);

