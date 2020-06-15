import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <br />
        <br />
        <Grid className="contact-grid">
          {/* <Cell col={6}>
            <h2>Paul Hanna</h2>
            <img
              src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
              alt="avatar"
              style={{height: '250px'}}
               />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>

          </Cell> */}
          <Cell col={6}>
            <h2>Contact me</h2>
            <hr />

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent icon="phone" style={{ fontSize: "28px" }}>
                    {/* <i className="fa fa-phone-square" aria-hidden="true" /> */}
                    647-860-4542
                  </ListItemContent>
                </ListItem>

                {/* <ListItem>
                  <ListItemContent style={{ fontSize: "25px" }}>
                    <i className="fa fa-fax" aria-hidden="true" />
                    (123) 456-7890
                  </ListItemContent>
                </ListItem> */}

                <ListItem>
                  <ListItemContent icon="mail" style={{ fontSize: "28px" }}>
                    {/* <i className="fa fa-envelope" aria-hidden="true" /> */}
                    <a href="mailto:mingyuan1248@gmail.com">Gmail</a>
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent icon="linkedin" style={{ fontSize: "28px" }}>
                    {/* <i className="fa fa-envelope" aria-hidden="true" /> */}
                    <a href="https://www.linkedin.com/in/mingyuan-hua-139093139">
                      LinkedIn
                    </a>
                  </ListItemContent>
                </ListItem>
                {/* 
                <ListItem>
                  <ListItemContent style={{ fontSize: "25px" }}>
                    <i className="fa fa-skype" aria-hidden="true" />
                    MySkypeID
                  </ListItemContent>
                </ListItem> */}
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
