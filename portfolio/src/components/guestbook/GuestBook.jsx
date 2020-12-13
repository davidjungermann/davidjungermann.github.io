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
            {props.isDesktop ? (
              <div>
                <h1>Guestbook</h1>
                <h5 className="content-heading">
                  Write something nice, pretend it's 1999!
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
              <div>
                <h1>Guestbook</h1>
                <h5 className="content-heading">
                  Use a device with a larger screen to write messages!
                </h5>
                <div className="col-sm">
                  <GuestBookLog></GuestBookLog>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </FullpageSection>
  );
}

export default GuestBook;