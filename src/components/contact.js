import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <br />
        <br />
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Contact me</h2>
            <hr />

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent icon="phone" style={{ fontSize: "28px" }}>
                    647-860-4542
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent icon="mail" style={{ fontSize: "28px" }}>
                    <a href="mailto:mingyuan1248@gmail.com">Gmail</a>
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent icon="linkedin" style={{ fontSize: "28px" }}>
                    <a href="https://www.linkedin.com/in/mingyuan-hua-139093139">
                      LinkedIn
                    </a>
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
