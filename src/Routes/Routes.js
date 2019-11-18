import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Showrecord from "../Pages/Showrecord/Showrecord";
import AddRecord from "../Pages/Addrecord/Addrecord";
import Editrecord from "../Pages/Editrecord/Editrecord";
class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={AddRecord} />
        <Route path="/showrecord" component={Showrecord} />
        <Route
          path="/updaterecord"
          component={() => <Showrecord page="edit" />}
        />

        <Route
          path="/deleterecord"
          component={() => <Showrecord page="delete" />}
        />
        <Route
          path="/searchrecord"
          component={() => <Showrecord page="search" />}
        />
      </Switch>
    );
  }
}

export default Routes;
