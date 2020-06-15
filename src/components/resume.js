import React, { Component } from "react";
import { Grid, Cell, Button } from "react-mdl";
import Education from "./education";
import Experience from "./experience";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid className="resume-grid">
          <Cell className="resume-col" col={12}>
            <div className="button-cell " col={12}>
              <Button
                raised
                accent
                className="button"
                href="https://drive.google.com/file/d/1MA-zWfo9BicaSawsJb2yWtaKr_sp7D_M/view?usp=sharing"
              >
                Download Complete Resume
              </Button>
            </div>
            <hr style={{ borderTop: "3px solid #cd3e77" }} />

            <h2>Education</h2>

            <Education
              startYear={2016}
              endYear={2018}
              schoolName="Arizona State University"
              schoolDescription="Master of Computer Science"
            />

            <Education
              startYear={2007}
              endYear={2009}
              schoolName="Soochow University, Jiangsu, China"
              schoolDescription="Bachelor of Software Engineering"
            />
            <hr style={{ borderTop: "3px solid #cd3e77" }} />

            <h2>Experience</h2>

            <Experience
              startYear={2018}
              endYear={2019}
              jobName="Software Developer, NASA JPL Impact Platform, ASU, Tempe, AZ"
              jobDescription="
              Worked on the simulation program with Dr. Hugh Barnaby in the school of Electrical, Computer and Energy Engineering for
              NASA Jet Propulsion Laboratory.
              Developed data processing modules for Netlist (electronic circuit description) data using Python, to study electronic
              component performance.
              Implemented and maintained the Linux-based simulation software under Windows environment, improved the convenience
              of electronic simulation process for researchers."
            />

            <Experience
              startYear={2014}
              endYear={2015}
              jobName="Software Developer, Shanghai Hesu Information Technology Ltd., Shanghai."
              jobDescription="Worked on a regional-wide deployed elevator emergency management system to evaluate services quality.
              Implemented and maintained SQL queries in MS SQL Server Database for analyzing elevator emergency respond data.
              Performed quality assurance and testing on MS SQL Server system.
              Worked with Data analysis team to improve the monthly analysis reports, reduced workload from 4 days to 1 day."
            />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
