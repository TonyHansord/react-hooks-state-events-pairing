import React from 'react';
import VoteButton from './VoteButton';

function VoteContainer({ upVotes, downVotes, upIncreaser, downIncreaser }) {
  return (
    <div>
      <VoteButton icon={`👍`} votes={upVotes} clickHandler={upIncreaser} />
      <VoteButton icon={`👎`} votes={downVotes} clickHandler={downIncreaser} />
    </div>
  );
}

export default VoteContainer;
