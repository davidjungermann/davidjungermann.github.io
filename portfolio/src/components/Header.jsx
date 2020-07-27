import React from "react";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.png";
import "../stylesheets/Links.css"

class Header extends React.Component {
  render() {
    return (
      <div className="float-right">
        <a className="github" href="https://github.com/davidjungermann">
          <img src={github} height="40" width="40" alt="Github" />
        </a>
        <a className="linkedin" href="https://www.linkedin.com/in/david-jungermann-13a550162/">
          <img src={linkedin} height="40" width="40" alt="LinkedIn" />
        </a>
      </div>
    );
  }
}

export default Header;
