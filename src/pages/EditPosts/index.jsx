import React, { useState, useEffect } from 'react';

// Styles
import './styles.scss';

// Components
import PostForm from '../../components/PostForm';

function EditPost({ match, history }) {
  const API_POST_URL = `http://127.0.0.1:8000/api/posts/${match.params.postId}/`;
  const [post, setPost] = useState({
    title: '',
    body: ''
  });

  useEffect(() => fetchPost(), []);

  const handleChange = event => {
    setPost({
      ...post,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();

    fetch(API_POST_URL, {
      method: 'PATCH',
      body: JSON.stringify(post),
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    history.push(`/posts/${match.params.postId}`);
  };

  return (
    <div className="edit-post">
      <h2>Edit Post</h2>

      <PostForm
        onChange={handleChange}
        onSubmit={handleSubmit}
        postValues={post}
      />
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

export default EditPost;
