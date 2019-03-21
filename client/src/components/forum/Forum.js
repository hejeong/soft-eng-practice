import React from 'react';
import { Link } from 'react-router-dom';
 
const Forum = ({ forum }) => {
  console.log(forum)
  const renderThreads = Object.keys(forum).map(threadId =>
    <div>
    <Link key={threadId} to={`/forum/${threadId}`}><button className='thread'>{forum[threadId].title}</button></Link>
    <br/>
    <br/>
    </div>
  );
 
  return (
    <div>
      {renderThreads}
    </div>
  );
};
 
export default Forum;
 