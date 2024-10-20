
import React, { useState } from 'react';

const CommentForm = () => {
  const [comment, setComment] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!comment) {
      setError("Comment can't be empty");
    } else {
      setError('');
     
    }
  };

  return (
    <form onSubmit={handleSubmit} aria-labelledby="comment-form">
      <div>
        <label htmlFor="comment">Comment:</label>
        <textarea
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          aria-required="true"
          aria-describedby="comment-desc"
          aria-invalid={!!error}
        ></textarea>
      </div>
      <button type="submit">Post Comment</button>
      <div aria-live="assertive" id="comment-error">
        {error}
      </div>
    </form>
  );
};

export default CommentForm;