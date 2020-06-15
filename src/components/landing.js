import React, { Component } from "react";
import { Grid, Cell, Button } from "react-mdl";
import Data_img from "./file/data.png";
import Web_img from "./file/web2.png";
import Footer from "./footer";
class Starter extends Component {
  render() {
    return (
      <div>
        <Grid className="landing-resume-grid">
          <Cell className="landing-resume-text" col={12}>
            <div className="banner-text">
              <h1>Hello!</h1>

              <h4>
                My name is Mingyuan, Data Engineer and Full Stack Developer.
              </h4>
              {/* <hr style={{ borderTop: "3px solid white" }} />
              <h3>Hello!</h3> */}
              {/* <p></p> */}
            </div>
          </Cell>

          <Cell className="resume-text-white" col={12}>
            <Grid className="intro-grid ">
              <Cell col={4}>
                <img
                  alt="Pic"
                  src={Web_img}
                  style={{
                    width: "100%",
                    maxHeight: "223px",
                    maxWidth: "190px",
                    class: "center",
                  }}
                />
              </Cell>
              <Cell col={8} style={{ maxWidth: "500px" }}>
                {/* <div className="resume-text-white"> */}
                <h3>As Full Stack Developer</h3>
                {/* <hr /> */}
                {/* <hr style={{ borderTop: "3px solid black" }} /> */}
                <p>
                  I am interested in creating responsive website, providing
                  seamless experience both on mobile and desktop. Scalability is
                  also my priority for my system design and implementation.{" "}
                </p>

                {/* <p>
                  Front End: HTML/CSS, JavaScript, Node.js, React.js, Gatsby,
                  D3.js.
                </p>
                <p>Back End: Flask, Django, Spring MVC, WordPress, PHP.</p> */}
                {/* </div> */}
                {/* <p>Others: AWS, Google Cloud, Firebase.</p> */}
              </Cell>
            </Grid>
          </Cell>
          <Cell className="landing-resume-text" col={12}>
            <Grid>
              <Cell col={4} tablet={12}>
                <h3>
                  <b>Front End</b>
                </h3>
                <p>HTML/CSS, JavaScript, React.js, Gatsby, D3.js.</p>
              </Cell>
              <Cell col={4} tablet={12}>
                <h3>
                  <b>Back End</b>
                </h3>
                <p>Flask, Django, Firebase, Spring MVC, WordPress, Node.js.</p>
              </Cell>
              <Cell col={4} tablet={12}>
                <h3>
                  <b>Database</b>
                </h3>
                <p>PostgreSQL, MySQL, SQL Server, AWS SQS, AWS S3.</p>
              </Cell>
            </Grid>
          </Cell>
          {/* <hr /> */}
          <Cell className="resume-text-white" col={12}>
            <Grid className="intro-grid ">
              <Cell col={8} style={{ maxWidth: "420px" }}>
                {/* <div className="resume-text-white"> */}
                <h3>As Data Engineer</h3>
                {/* <hr /> */}
                {/* <hr style={{ borderTop: "3px solid black" }} /> */}
                <p>Speciaty in distributed computing database system. </p>
                <p>
                  {" "}
                  <b>Languages: </b>Python, R, Matlab , SQL.
                </p>
                {/* </div> */}
                <p>
                  <b>Tools: </b>Hadoop, Spark, NumPy, Matplotlib.
                </p>
              </Cell>
              <Cell col={4}>
                <img
                  alt="Pic"
                  src={Data_img}
                  style={{
                    width: "100%",
                    maxHeight: "223px",
                    maxWidth: "190px",
                    class: "center",
                  }}
                />
              </Cell>
            </Grid>
          </Cell>

          <Cell className="resume-text" col={8} tablet={12}>
            <div>
              <h2>
                <b>About me</b>
              </h2>
              <hr style={{ borderTop: "3px solid white" }} />
              <p>
                I'm a web developer and data engineer based in Toronto, Canada,
                a passionate learner with broad interests. Right now I am
                learning exciting modern front-end tech stack.{" "}
              </p>
              <Grid>
                <Cell col={6} tablet={12}>
                  <Button raised colored className="button" href="/contact">
                    Contact
                  </Button>
                </Cell>
                <Cell col={6} tablet={12}>
                  {/* &nbsp;&nbsp;&nbsp;&nbsp; */}
                  <Button raised colored className="button" href="/resume">
                    Resume
                  </Button>
                </Cell>
              </Grid>
            </div>
          </Cell>
          <Cell className="resume-text" col={4} tablet={12}>
            <div>
              <h2>
                <b>Project</b>
              </h2>
              <hr style={{ borderTop: "3px solid white" }} />
              <p>
                Check my project from the link below. Progress is being made
                every minutes.{" "}
              </p>
              <Grid>
                <Cell col={12} tablet={12}>
                  <Button raised colored className="button" href="/projects">
                    Check
                  </Button>
                </Cell>
              </Grid>
            </div>
          </Cell>
        </Grid>
        <Footer />
      </div>
    );
  }
}

export default Starter;
