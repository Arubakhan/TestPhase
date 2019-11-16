import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Showrecord from "../Pages/Showrecord/Showrecord";

class Routes extends Component {
  render() {
    return (
      <Switch>
<Route path="/" exact component={Showrecord} />
<Route path="/Showrecord" exact component={Showrecord} />
        
      </Switch>
     
    );
  }
}

export default Routes;
