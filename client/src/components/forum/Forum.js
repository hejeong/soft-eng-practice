import React from 'react';
import { Link } from 'react-router-dom';
 
const Forum = ({ forum }) => {
  const renderThreads = Object.keys(forum).map(threadId =>
    <Link className="thread" key={threadId} to={`/forum/${threadId}`}>{forum[threadId].title}</Link>
  );
 
  return (
    <div>
      {renderThreads}
    </div>
  );
};
 
export default Forum;
 