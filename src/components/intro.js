import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Projects from "./projects";
class Intro extends Component {
  render() {
    return (
      <div>
        <br />
        <br />
        <Grid className="project-grid-all">
          <Cell className="resume-text-white" col={12}>
            {/* <div className="banner-text-white"> */}
            <Projects />
            {/* </div> */}
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Intro;
