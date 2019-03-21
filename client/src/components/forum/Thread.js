import React from 'react';

const Thread = ({match, forum}) => {
        console.log('haha')
        const currentThread = forum[match.params.threadId];
        return(
           <div>
                    <h1>{currentThread.title}</h1>
                    <div className='forum'>
                    {currentThread.posts.map((posts, index) => (
                            <div className='post'>
                                {posts}
                            </div>
                    ))}
                    </div>
            </div>
        )
}
            

export default Thread;