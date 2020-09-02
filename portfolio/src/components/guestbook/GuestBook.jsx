import React from "react";
import { FullpageSection } from "@ap.cx/react-fullpage";
import GuestBookForm from "./GuestBookForm";
import GuestBookLog from "./GuestBookLog";
import "../../stylesheets/Content.css";

function GuestBook(props) {
  return (
    <FullpageSection>
      <div className="content">
        <div className="container">
          <div className="info-body">
            <h1>Guestbook</h1>

            {props.isDesktop ? (
              <div>
                <h5 className="content-heading">
                  Write something nice, pretend it's 2001!
                </h5>
                <div className="row">
                  <div className="col-sm">
                    <GuestBookForm></GuestBookForm>
                  </div>
                  <div className="col-sm">
                    <GuestBookLog></GuestBookLog>
                  </div>
                </div>
              </div>
            ) : (
              <div className="col-sm">
                <GuestBookLog></GuestBookLog>
              </div>
            )}
          </div>
        </div>
      </div>
    </FullpageSection>
  );
}

export default GuestBook;
