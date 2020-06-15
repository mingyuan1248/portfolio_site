import React from "react";
import { Switch, Route } from "react-router-dom";

import Landing from "./landing";
import AboutMe from "./aboutme";
import Contact from "./contact";
// import Projects from "./projects";
import Resume from "./resume";
// import Starter from "./starter";
// import Foot from "./footer";
import Intro from "./intro";

const Main = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/aboutme" component={AboutMe} />
      <Route path="/contact" component={Contact} />
      <Route path="/projects" component={Intro} />
      <Route path="/resume" component={Resume} />
    </Switch>
    {/* <br /> */}
  </div>
);

export default Main;
