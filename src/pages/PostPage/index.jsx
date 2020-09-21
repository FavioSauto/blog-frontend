import React, { useState, useEffect } from 'react';

// Components
import Comments from '../../components/Comments';

// Styles
import './styles.scss';

function PostPage({ match }) {
  const API_POST_URL = `http://127.0.0.1:8000/api/posts/${match.params.postId}/`;
  const [post, setPost] = useState({});

  useEffect(() => fetchPost(), []);

  return (
    <div className="post">
      <h1>{post.title}</h1>

      <p>{post.body}</p>

      <Comments postId={match.params.postId} />
    </div>
  );

  function fetchPost() {
    fetch(`${API_POST_URL}`)
      .then(response => response.json())
      .then(data => {
        setPost(data);
      });
  }
}

export default PostPage;
