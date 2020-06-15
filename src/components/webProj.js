import React, { Component } from "react";
import { Cell } from "react-mdl";
// eslint-disable-next-line
import Project, { Project2 } from "./project";
class WebProject extends Component {
  render() {
    return (
      <React.Fragment>
        <Cell col={4} tablet={12}>
          <Project
            picture={require("./file/portfolioWeb.png")}
            name="Portfolio Site"
            intro="Personal pofolio site using React.js."
            link="/"
          />
        </Cell>
      </React.Fragment>
    );
  }
}

export default WebProject;
