import React from 'react';

function VoteButton({ icon, votes, clickHandler }) {
  return (
    <button onClick={clickHandler}>
      {icon} {votes}
    </button>
  );
}

export default VoteButton;
