import React, { useState, useEffect } from "react";
import { firestore, collectionData } from "./Firestore";
import "../../stylesheets/GuestBookLog.css";

function GuestBookLog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const postsRef = firestore.collection("posts");
    collectionData(postsRef.orderBy("timestamp", "desc"), "id").subscribe(
      (posts) => {
        setPosts(posts);
      }
    );

    return () => {
      setPosts([]);
    };

  }, []);

  return (
    <div className="post-container">
      <ul className="list-group">
        {posts.map((post) => {
          return (
            <div className="card" key={post.id}>
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

export default GuestBookLog;
