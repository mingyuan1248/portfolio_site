import React, { Component } from "react";
import { Cell } from "react-mdl";
// eslint-disable-next-line
import Project, { Project2 } from "./project";
class DataProject extends Component {
  render() {
    return (
      // <Grid className="project-grid">

      <React.Fragment>
        <Cell col={4} tablet={12}>
          <Project
            //   picture="http://sigspatial2016.sigspatial.org/giscup2016/gfx/image002.jpg"
            picture={require("./file/geoData.png")}
            name="GeoSpatial Data Analysis"
            intro="Performing GeoSpatial Data Analysis with Hadoop cluster and Spark."
            link="https://drive.google.com/file/d/1svxLZoyJ5jtLS2tbQvj4CRQpvzoCV7vA/view?usp=sharing"
          />
        </Cell>
        <Cell col={4} tablet={12}>
          <Project
            //   picture="http://sigspatial2016.sigspatial.org/giscup2016/gfx/image002.jpg"
            picture={require("./file/smartYelp.png")}
            name="The Smart Yelp"
            intro="A Restaurant recommendation system based on Yelp Dataset."
            link="https://drive.google.com/file/d/1YDm1JdrqN8iL9icVzPsYIWWI-hQzdDU_/view?usp=sharing"
          />
        </Cell>
      </React.Fragment>

      // </Grid>
    );
  }
}

export default DataProject;
