import React, { Component } from "react";
import { Cell } from "react-mdl";
// eslint-disable-next-line
import Project, { Project2 } from "./project";
class OtherProj extends Component {
  render() {
    return (
      <React.Fragment>
        <Cell col={4} tablet={12}>
          <Project
            picture={require("./file/androidTime.png")}
            name="Android Messaging with Time Differences"
            intro="Time syncing Android messaging app with showing your time zone."
            link="https://drive.google.com/file/d/13yNYUhEcbKElPldYKtOkJYs-YAOFDtmE/view?usp=sharing"
          />
        </Cell>
      </React.Fragment>
    );
  }
}

export default OtherProj;
