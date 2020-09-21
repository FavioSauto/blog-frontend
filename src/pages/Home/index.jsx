import React, { useState, useEffect } from 'react';

// Components
import PageLoading from '../../components/PageLoading';
import PostCard from '../../components/PostCard';

// Styles
import './styles.scss';

function Home() {
  const API_POSTS_URL = 'http://localhost:8000/api/posts/';

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPostsData();
  }, []);

  return loading ? (
    <PageLoading />
  ) : (
    <div className="posts-list">
      <h1>Posts List</h1>

      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );

  function fetchPostsData() {
    fetch(API_POSTS_URL, { mode: 'no-cors' })
      .then(response => response.json())
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(error => {
        setLoading(false);
      });
  }
}

export default Home;
