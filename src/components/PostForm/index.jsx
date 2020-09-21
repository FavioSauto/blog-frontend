import React from 'react';

// Styles
import './styles.scss';

function PostForm({ onChange, onSubmit, postValues }) {
  return (
    <div className="PostForm-Container">
      <form className="PostForm" onSubmit={onSubmit}>
        <div className="PostForm_Group">
          <label htmlFor="title">Title</label>
          <input
            name="title"
            type="text"
            className="PostForm_FormControl"
            id="title"
            value={postValues ? postValues.title : ''}
            onChange={onChange}
            placeholder="Title"
          />
        </div>

        <div className="PostForm_Group">
          <label htmlFor="body">Entry</label>
          <textarea
            name="body"
            className="PostForm_FormControl"
            onChange={onChange}
            value={postValues ? postValues.body : ''}
            id="body"
            placeholder="Write your entry here"
          ></textarea>
        </div>

        <button className="PostForm_Button" type="submit" value="Submit">
          Publish
        </button>
      </form>
    </div>
  );
}

export default PostForm;
