import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Addrecord from "../Pages/Addrecord/Addrecord";

class Routes extends Component {
  render() {
    return (
      <Switch>
<Route path="/" exact component={Addrecord} />
<Route path="/Addrecord" exact component={Addrecord} />
        
      </Switch>
     
    );
  }
}

export default Routes;
