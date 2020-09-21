import React from 'react';

// Styles
import './styles.scss';

function CommentForm({ onChange, onSubmit }) {
  return (
    <div className="CommentForm">
      <form className="CommentForm_form" onSubmit={onSubmit}>
        <div className="CommentForm_formGroup">
          <label htmlFor="text">Write your comment: </label>
          <textarea
            onChange={onChange}
            name="text"
            placeholder="Write your comment: "
          ></textarea>
        </div>

        <button type="submit">Send comment</button>
      </form>
    </div>
  );
}

export default CommentForm;
