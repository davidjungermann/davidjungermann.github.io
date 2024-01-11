import React, { useState, useEffect } from 'react';
import { firestore, auth } from './Firestore';
import { collection, addDoc, query, where, getDocs, Timestamp } from 'firebase/firestore';
import { onAuthStateChanged, signInAnonymously } from 'firebase/auth';
import { v4 as uuidv4 } from 'uuid';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import '../../stylesheets/GuestBookForm.css';

function GuestBookForm() {
  const [alias, setAlias] = useState('');
  const [content, setContent] = useState('');
  const [uid, setUid] = useState(null);
  const [validated, setValidated] = useState(false);
  const [posted, setPosted] = useState(false);

  useEffect(() => {
    signInAnonymously(auth);
    onAuthStateChanged(auth, (user) => {
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
    const usersCollection = collection(firestore, 'users');
    const q = query(usersCollection, where('uid', '==', uid));
    const snapshot = await getDocs(q);

    if (snapshot.empty) {
      await addDoc(collection(firestore, 'posts'), {
        id: uuidv4(),
        alias,
        content,
        timestamp: Timestamp.now(),
        uid,
      });

      await addDoc(usersCollection, {
        uid,
      });
    } else {
      setPosted(true);
    }

    setAlias('');
    setContent('');
    setValidated(false);
  };

  return (
    <div>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row>
          <Form.Group as={Col} md="8" controlId="validationCustom01">
            <Form.Control
              className="input-name"
              autoComplete="off"
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
              Please write your name and a message.
            </Form.Control.Feedback>
            {posted ? (
              <p className="posted-message">
                Sorry, you can't write two messages in quick succession, wait a bit!
              </p>
            ) : (
              <div />
            )}
          </Form.Group>
        </Row>
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </Form>
    </div>
  );
}

export { GuestBookForm };
