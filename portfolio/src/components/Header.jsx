import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <div className="float-right">
          <div>
            <a href="https://github.com/davidjungermann" class="no-underline">
              <img src="./github.svg" height="40" width="40" />
            </a>
            <a
              href="https://www.linkedin.com/in/david-jungermann-13a550162/"
              className="no-underline"
            >
              <img src="./linkedin.png" height="40" width="40" />
            </a>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-4 align-middle">
              <img
                src="./image_profile.jpg"
                height="250"
                width="250"
                class="rounded-circle float-left"
              />
            </div>
            <div className="col-md-5 mt-5">
              <h1>David Jungermann</h1>
              <p>
                Student Talent at Tetra Pak | 5th year MSc student | Information
                and communication engineering technologies
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
