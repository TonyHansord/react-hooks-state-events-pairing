import React from 'react';

function Video({ url, title }) {
  return (
    <iframe
      src={url}
      width="919"
      height="525"
      title={title}
      allowFullScreen
    ></iframe>
  );
}

export default Video;
