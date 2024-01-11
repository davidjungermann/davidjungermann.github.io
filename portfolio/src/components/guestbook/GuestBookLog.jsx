import React, { useState, useEffect } from 'react';
import { firestore } from './Firestore';
import { collection, query, orderBy } from 'firebase/firestore';
import { collectionData } from 'rxfire/firestore';
import '../../stylesheets/GuestBookLog.css';

function GuestBookLog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const postsRef = query(collection(firestore, 'posts'), orderBy('timestamp', 'desc'));
    const subscription = collectionData(postsRef, 'id').subscribe((posts) => {
      setPosts(posts);
    });

    return () => {
      subscription.unsubscribe();
      setPosts([]);
    };
  }, []);

  return (
    <div className="post-container">
      <ul className="list-group">
        {posts.map((post) => (
          <div className="card" key={post.id}>
            <div className="card-body">
              <h5 className="card-text">{post.content}</h5>
              <i className="card-title">{post.alias}</i>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}

export { GuestBookLog };
