import React, { Component } from "react";
import { Footer } from "react-mdl";
class foot extends Component {
  render() {
    return (
      <Footer
        class="mdl-mini-footer"
        // style={{ left: 0, width: "100 % ", bottom: 0 }}
      >
        <div class="mdl-mini-footer__left-section">
          <div class="mdl-logo">Home</div>
          <ul class="mdl-mini-footer__link-list">
            <li>
              <a href="/Starter">Help</a>
            </li>
            <li>
              <a href="/Starter">Privacy & Terms</a>
            </li>
          </ul>
        </div>
      </Footer>
    );
  }
}

export default foot;
