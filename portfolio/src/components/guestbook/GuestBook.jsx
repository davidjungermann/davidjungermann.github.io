import React from 'react';
import GuestBookForm from './GuestBookForm';
import GuestBookLog from './GuestBookLog';
import '../../stylesheets/Content.css';

function GuestBook(props) {
  return (
    <div className="content">
      <div className="container">
        <div className="info-body">
          <h1>Guestbook</h1>
          <h5 className="content-heading">Write something nice, pretend it's 1999!</h5>
          <div className="row">
            <div className="col-sm">
              <GuestBookForm />
            </div>
            <div className="col-sm">
              <GuestBookLog />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GuestBook;
