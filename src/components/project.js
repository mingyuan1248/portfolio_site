import React, { Component } from "react";
import {
  Card,
  CardTitle,
  CardText,
  CardActions,
  CardMenu,
  Button,
  IconButton,
} from "react-mdl";

class Project extends Component {
  render() {
    return (
      <Card
        shadow={5}
        style={{ width: "100%", minWidth: "450", margin: "auto" }}
      >
        <CardTitle
          style={{
            backgroundImage: `url(${this.props.picture})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            height: "176px",
            color: "#fff",
          }}
        >
          {this.props.name}
        </CardTitle>
        <CardText>{this.props.intro}</CardText>
        <CardActions border>
          <Button colored href={this.props.link}>
            Link
          </Button>
        </CardActions>
        <CardMenu style={{ color: "#fff" }}>
          <IconButton name="share" />
        </CardMenu>
      </Card>
    );
  }
}
class Project2 extends Component {
  render() {
    return (
      <Card
        shadow={5}
        style={{ width: "100%", minWidth: "450", margin: "auto" }}
      >
        <CardTitle
          style={{
            backgroundImage: `url(${this.props.picture})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            height: "176px",
            color: "#fff",
          }}
        >
          {this.props.name}
        </CardTitle>
        <CardText>{this.props.intro}</CardText>
        <CardActions border>
          <Button colored href={this.props.link}>
            Link
          </Button>
          <Button colored>CodePen</Button>
        </CardActions>
        <CardMenu style={{ color: "#fff" }}>
          <IconButton name="share" />
        </CardMenu>
      </Card>
    );
  }
}
export default Project;
export { Project2 };
