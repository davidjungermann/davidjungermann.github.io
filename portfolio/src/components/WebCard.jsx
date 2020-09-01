import React from "react";
import "../stylesheets/Content.css";

function WebCards(props) {
  return (
    <div className="col-sm">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.children}</p>
          <a className="card-link" href={props.children}>
            Source
          </a>
        </div>
      </div>
    </div>
  );
}
export default WebCards;
