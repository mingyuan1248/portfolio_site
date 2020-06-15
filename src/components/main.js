import React from "react";
import { Switch, Route } from "react-router-dom";

import Landing from "./landing";

import Contact from "./contact";

import Resume from "./resume";

import Intro from "./intro";

const Main = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/contact" component={Contact} />
      <Route path="/projects" component={Intro} />
      <Route path="/resume" component={Resume} />
    </Switch>
  </div>
);

export default Main;
