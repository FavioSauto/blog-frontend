import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';

// Components
import CommentForm from '../CommentForm';
import CommentCard from '../CommentCard';

// Styles
import './styles.scss';

function Comments({ postId }) {
  const API_COMMENTS_URL = `http://127.0.0.1:8000/api/comments/`;
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({ text: '', post: 0 });
  const history = useHistory();

  useEffect(() => {
    fetchComments();
  }, []);

  const handleChange = event => {
    setNewComment({
      ...newComment,
      [event.target.name]: event.target.value,
      post: postId
    });
  };

  const handleSubmit = event => {
    event.preventDefault();

    fetch(API_COMMENTS_URL, {
      method: 'POST',
      body: JSON.stringify(newComment),
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    history.go(0);
  };

  return (
    <div className="Comments">
      <h2 className="Comments_title">Comments</h2>

      <CommentForm onChange={handleChange} onSubmit={handleSubmit} />

      {comments.map(comment => (
        <CommentCard key={comment.id} comment={comment} />
      ))}
    </div>
  );

  function fetchComments() {
    fetch(API_COMMENTS_URL)
      .then(response => response.json())
      .then(data =>
        setComments(data.filter(comment => comment.post == postId))
      );
  }
}

export default Comments;
