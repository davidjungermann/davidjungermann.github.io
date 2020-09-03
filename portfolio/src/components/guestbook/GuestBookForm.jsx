import React, { useState, useEffect } from "react";
import firestore from "./Firestore";
import { auth } from "./Firestore";
import "../../stylesheets/GuestBookForm.css";
import { v4 as uuidv4 } from "uuid";

import { Form, Col, Button, InputGroup } from "react-bootstrap";

function GuestBookForm() {
  const [alias, setAlias] = useState("");
  const [content, setContent] = useState("");
  const [uid, setUid] = useState(null);
  const [validated, setValidated] = useState(false);
  const [posted, setPosted] = useState(false);

  useEffect(() => {
    auth.signInAnonymously();
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUid(user.uid);
      } else {
        setUid(null);
      }
    });
  }, []);

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      addPost(e);
    }
    setValidated(true);
  };

  const addPost = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    const users = firestore.firestore().collection("users");
    const snapshot = await users.where("uid", "==", uid).get();

    if (snapshot.empty) {
      firestore.firestore().collection("posts").add({
        id: uuidv4(),
        alias: alias,
        content: content,
        timestamp: firestore.firestore.Timestamp.now(),
        uid: uid,
      });

      firestore.firestore().collection("users").add({
        uid: uid,
      });

    } else {
      setPosted(true);
    }
    setAlias("");
    setContent("");
    setValidated(false);
  };

  return (
    <div>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Row>
          <Form.Group as={Col} md="8" controlId="validationCustom01">
            <Form.Control
              className="input-name"
              size="lg"
              required
              type="text"
              placeholder="Name"
              value={alias}
              onChange={(e) => setAlias(e.target.value)}
            />
            <Form.Control
              className="input-content"
              size="lg"
              as="textarea"
              rows="3"
              required
              placeholder="Write something!"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please write your name and a message
            </Form.Control.Feedback>
            {posted ? <p className="posted-message">Sorry, you can't write two messages in quick succession, wait a bit!</p> : <div></div>}
          </Form.Group>
        </Form.Row>
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </Form>
    </div>
  );
}

export default GuestBookForm;
