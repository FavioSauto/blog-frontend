import React from 'react';

// Styles
import './styles.scss';

function CommentCard({ comment }) {
  let date = new Date(comment['created_at']);
  date = `${date.getUTCDate()}/${(date.getUTCMonth() + 1)
    .toString()
    .padStart(2, '0')}/${date.getFullYear()}`;

  return (
    <div className="CommentCard">
      <p className="CommentCard_body">{comment.text}</p>

      <p className="CommentCard_footer">
        <b>Published: </b>
        {date}
      </p>
    </div>
  );
}

export default CommentCard;
