import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import './styles.scss';

function PostCard({ post }) {
  let date = new Date(post['created_at']);
  date = `${date.getUTCDate()}/${(date.getUTCMonth() + 1)
    .toString()
    .padStart(2, '0')}/${date.getFullYear()}`;

  let excerpt = post.body.substring(0, 281);

  return (
    <div className="PostCard">
      <div className="PostCard_header">
        <h2>
          <Link to={`/posts/${post.id}`}>{post.title}</Link>
        </h2>

        <Link to={`/posts/edit/${post.id}`}>
          Editar
          <i className="far fa-edit"></i>
        </Link>
      </div>

      <div className="PostCard_body">
        <p>{excerpt}</p>
      </div>

      <div className="PostCard_footer">
        <div className="PostCard_footer--date">
          <i className="far fa-comment-alt"></i>
          <b> {post.comments.length} </b>{' '}
          {post.comments.length > 1 ? 'comments' : 'comment'}
        </div>

        <div className="PostCard_footer--date">
          <p>
            <b>Published: </b>
            {date}
          </p>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
