import React from "react";
import "../stylesheets/Content.css";

function clickHandler() {
  console.log("Detta funkar!");
}

function WebCards(props) {
  return (
    <div className="col-sm">
      <a href={props.link} className="webcard-link">
        <div className="card" onClick={clickHandler}>
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
