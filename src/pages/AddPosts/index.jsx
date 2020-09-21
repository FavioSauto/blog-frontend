import React, { useState, useEffect } from 'react';

// Components
import PostForm from '../../components/PostForm';

// Styles
import './styles.scss';

function AddPost(props) {
  const API_POSTS_URL = 'http://localhost:8000/api/posts/';

  const [post, setPost] = useState({
    title: '',
    body: ''
  });

  const handleChange = event => {
    setPost({
      ...post,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();

    fetch(API_POSTS_URL, {
      method: 'POST',
      body: JSON.stringify(post),
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    props.history.push('/');
  };

  return (
    <div className="add-posts">
      <h2>New Post</h2>

      <PostForm
        onChange={handleChange}
        onSubmit={handleSubmit}
        postValues={post}
      />
    </div>
  );
}

export default AddPost;
