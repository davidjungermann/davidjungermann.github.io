import React, { useState, useEffect } from "react";
import firestore from "./Firestore";
import { auth } from "./Firestore";
import "../../stylesheets/GuestBookForm.css";
import { v4 as uuidv4 } from "uuid";

function GuestBookForm() {
  const [alias, setAlias] = useState("");
  const [content, setContent] = useState("");
  const [uid, setUid] = useState(null);

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

  const addPost = async (e) => {
    e.preventDefault();
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

      setAlias("");
      setContent("");
    } else {
      alert(
        "In order to keep load reasonable, wait a bit before writing a new message!"
      );
    }
  };

  return (
    <form onSubmit={addPost}>
      <div className="form-group">
        <input
          required
          type="text"
          name="alias"
          className="input-name"
          placeholder="Name"
          onChange={(e) => setAlias(e.target.value)}
          value={alias}
        />
      </div>
      <div className="form-group">
        <textarea
          required
          className="input-content"
          type="text"
          name="content"
          placeholder="Say hi!"
          onChange={(e) => setContent(e.target.value)}
          value={content}
        />
      </div>
      <button type="submit" className="submit-btn">
        Submit
      </button>
    </form>
  );
}

export default GuestBookForm;
