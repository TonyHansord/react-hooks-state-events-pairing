import React from 'react';
import Comment from './Comment';

function CommentSection({ className, comments }) {
  console.log(comments.length);
  const commentEls = comments.map(({ id, user, comment }) => (
    <Comment key={id} user={user} commentText={comment}></Comment>
  ));

  return (
    <div className={className}>
      <h3>{comments.length} Comments</h3>
      {commentEls}
    </div>
  );
}

export default CommentSection;
