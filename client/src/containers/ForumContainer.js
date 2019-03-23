import React from 'react';
import {Route} from 'react-router-dom';
import Thread from '../components/forum/Thread'
import Forum from '../components/forum/Forum';
import NewPostBar from '../components/forum/NewPostBar'
import {checkLoggedIn} from '../login-helpers';
const ForumContainer = ({match, forum}) => {
    checkLoggedIn();
    return(
        <>
        <NewPostBar/>
    <div className='forum'>
        <br/>
        <Route exact path={match.url} render={()=>(
             <Forum forum={forum} />
        )} />
        <Route path={`${match.url}/:threadId`}  render={(routerProps)=> <Thread forum={forum} {...routerProps} />} />

    </div>
    </>)
}

export default ForumContainer;