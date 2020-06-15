import React, { Component } from "react";
import { Tabs, Tab, Grid, Cell } from "react-mdl";

import WebProj from "./webProj";
import DataProj from "./dataProj";
import OtherProj from "./otherProj";
class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div>
          <Grid className="project-grid">
            <DataProj />
            <WebProj />

            <OtherProj />
          </Grid>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <Grid className="project-grid">
            <DataProj />
          </Grid>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <Grid className="project-grid">
            <WebProj />
          </Grid>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div>
          <Grid className="project-grid">
            <OtherProj />
          </Grid>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>All</Tab>
          <Tab>Data</Tab>
          <Tab>Web</Tab>
          <Tab>Others</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
