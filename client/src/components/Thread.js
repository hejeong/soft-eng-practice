import React from 'react';

const Thread = ({match, forum}) => {
        console.log(match)
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
<<<<<<< HEAD
}}
=======
}
>>>>>>> 057f049e35140d6bfaf1f312c3c6803770928a2b
            

export default Thread;