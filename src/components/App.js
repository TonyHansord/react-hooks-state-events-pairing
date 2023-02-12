import React, { useState } from 'react';
import video from '../data/video.js';
import CommentSection from './CommentsSection.js';
import Video from './Video.js';
import VoteContainer from './VoteContainer.js';

function App() {
  console.log("Here's your data:", video);

  const [showComments, setshowComments] = useState(true);
  const [upVotes, setUpVotes] = useState(video.upvotes);
  const [downVotes, setDownVotes] = useState(video.downvotes);

  function handleToggleComments() {
    setshowComments(!showComments);
  }

  return (
    <div className="App">
      <Video url={video.embedUrl} title={video.title} />
      <h2>{video.title}</h2>
      <VoteContainer
        upVotes={upVotes}
        downVotes={downVotes}
        upIncreaser={() => setUpVotes(upVotes + 1)}
        downIncreaser={() => setDownVotes(downVotes + 1)}
      />
      <p>
        {video.views} Views | Uploaded {video.createdAt}
      </p>
      <button onClick={handleToggleComments}>
        {showComments ? 'Hide Comments' : 'Show Comments'}
      </button>
      <hr></hr>
      <CommentSection
        className={showComments ? '' : 'hidden'}
        comments={video.comments}
      />
    </div>
  );
}

export default App;
