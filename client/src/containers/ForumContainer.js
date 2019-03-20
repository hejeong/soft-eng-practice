import React from 'react';
import {Route} from 'react-router-dom';
import Thread from '../components/Thread'
import Forum from '../components/Forum';

const ForumContainer = ({match, forum}) => (
    <div className='forum'> 
        <Route exact path={match.url} render={()=>(
             <Forum forum={forum} />
        )} />
        <Route path={`${match.url}/:threadId`}  render={(routerProps)=> <Thread forum={forum} {...routerProps} />} />

    </div>
)

export default ForumContainer;