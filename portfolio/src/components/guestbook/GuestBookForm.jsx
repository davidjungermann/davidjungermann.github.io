import React from "react";
import firestore from "./Firestore";
import { auth } from "./Firestore";
import "../../stylesheets/GuestBookForm.css";
import { v4 as uuidv4 } from "uuid";

class GuestBookForm extends React.Component {
  constructor() {
    super();
    this.addPost = this.addPost.bind(this);
    this.state = {
      id: "",
      alias: "",
      content: "",
      uid: null,
    };
  }

  componentDidMount() {
    auth.signInAnonymously();

    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          uid: user.uid,
        });
      } else {
        this.setState({
          uid: null,
        });
      }
    });
  }

  updateInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  async addPost(e) {
    e.preventDefault();
    const users = firestore.firestore().collection("users");
    const snapshot = await users.where("uid", "==", this.state.uid).get();

    if(snapshot.empty) {
      firestore.firestore().collection("posts").add({
        id: uuidv4(),
        alias: this.state.alias,
        content: this.state.content,
        timestamp: firestore.firestore.Timestamp.now(),
        uid: this.state.uid,
      });

      firestore.firestore().collection("users").add({
        uid: this.state.uid,
      });

      this.setState({
        alias: "",
        content: "",
      });
    } else {
      alert("In order to keep load reasonable, wait a bit before writing a new message!");
    }
    
  }

  render() {
    return (
      <form onSubmit={this.addPost}>
        <div className="form-group">
          <input
            required
            type="text"
            name="alias"
            className="input-name"
            placeholder="Name"
            onChange={this.updateInput}
            value={this.state.alias}
          />
        </div>
        <div className="form-group">
          <textarea
            required
            className="input-content"
            type="text"
            name="content"
            placeholder="Say hi!"
            onChange={this.updateInput}
            value={this.state.content}
          />
        </div>
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    );
  }
}

export default GuestBookForm;
