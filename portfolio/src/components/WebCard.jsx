import React from "react";
import "../stylesheets/Content.css";

function WebCards(props) {
  return (
    <div className="col-md-3">
      <a href={props.link} className="webcard-link">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.children}</p>
          </div>
        </div>
      </a>
    </div>
  );
}
export default WebCards;
