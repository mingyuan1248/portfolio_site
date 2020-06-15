import React, { Component } from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";
import background from "./components/file/background.jpg";
class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout
          style={{
            backgroundImage: `url(${background})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <Header
            transparent
            title={
              <Link style={{ textDecoration: "none", color: "white" }} to="/">
                Home
              </Link>
            }
            style={{ color: "white" }}
          >
            <Navigation>
       
              <Link to="/">About Me</Link>

              <Link to="/resume">Resume</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Header>
          <Drawer
            title={
              <Link style={{ textDecoration: "none", color: "black" }} to="/">
                Home
              </Link>
            }
          >
            <Navigation>

              <Link to="/resume">Resume</Link>

              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
       
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
