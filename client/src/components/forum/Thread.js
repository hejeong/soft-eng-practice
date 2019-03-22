import React from 'react';

const Thread = ({match, forum}) => {
        console.log(match)
        const currentThread = forum[match.params.threadId];
        return(
           <div>
                    <div className='forum'>
                    <h1>{currentThread.title}</h1>
                    {currentThread.posts.map((posts, index) => 
                        <>
                        {(index === currentThread.endorsed) ?
                                <>
                                        <div className='nameBar endorsed'>
                                                {currentThread.users[index]}
                                        </div>
                                        <div className='post endorsed'>
                                                {posts}
                                        </div>
                                        <br/>
                                </> 
                        :
                                <>
                                        <div className='nameBar'>
                                                {currentThread.users[index]}
                                        </div>
                                        <div className='post'>
                                                {posts}
                                        </div>
                                        <br/>
                                </>
                        }</>)}
                    </div>
            </div>
        )
}
            

export default Thread;