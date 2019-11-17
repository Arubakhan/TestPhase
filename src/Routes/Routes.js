import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Showrecord from "../Pages/Showrecord/Showrecord";
import AddRecord from '../Pages/Addrecord/Addrecord';
class Routes extends Component {
  render() {
    return (
      <Switch>
<Route path="/" exact component={AddRecord} />
<Route path="/Showrecord" exact component={Showrecord} />
        
      </Switch>
     
    );
  }
}

export default Routes;
