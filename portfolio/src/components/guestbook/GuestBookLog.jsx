import React from "react";
import { firestore, collectionData } from "./Firestore";
import "../../stylesheets/GuestBookLog.css";

class GuestBookLog extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    const postsRef = firestore.collection("posts");
    collectionData(postsRef.orderBy("timestamp", "desc"), "id").subscribe(
      (posts) => {
        this.setState({
          posts: posts,
        });
      }
    );
  }

  componentWillUnmount() {
    this.setState({
      posts: [],
    });
  }

  render() {
    return (
      <div className="post-container">
        <ul className="list-group">
          {this.state.posts.map((post) => {
            return (
              <div className="card">
                <div className="card-body">
                  <h5 className="card-text">{post.content}</h5>
                  <i className="card-title">{post.alias}</i>
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default GuestBookLog;
