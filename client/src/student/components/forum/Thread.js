import React from 'react';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

const Thread = ({match}) => {
        console.log(match)
        const forum = (cookies.get('forumInfo')).data
        const currentThread = forum[match.params.threadId];
        return(
                    <div>
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
        )
}
            

export default Thread;