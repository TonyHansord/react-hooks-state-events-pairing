import React, { useState } from 'react';
import VoteContainer from './VoteContainer';

function Comment({ user, commentText }) {
  const [upVotes, setUpVotes] = useState(0);
  const [downVotes, setDownVotes] = useState(0);

  return (
    <div>
      <h4>{user}</h4>
      <p>{commentText}</p>
      <VoteContainer
        upVotes={upVotes}
        downVotes={downVotes}
        upIncreaser={() => setUpVotes(upVotes + 1)}
        downIncreaser={() => setDownVotes(downVotes + 1)}
      />
    </div>
  );
}
export default Comment;
