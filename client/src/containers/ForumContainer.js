import React from 'react';
import {Route} from 'react-router-dom';
<<<<<<< HEAD
import Thread from '../components/Thread'
import Forum from '../components/Forum';
=======
import Thread from '../components/forum/Thread'
import { NavLink } from 'react-router-dom';
import Forum from '../components/forum/Forum';
>>>>>>> 187d4e2d52842291adf0df516c4bb8099e6b6896

const ForumContainer = ({match, forum}) => (
    <div className='forum'> 
        <Route exact path={match.url} render={()=>(
             <Forum forum={forum} />
        )} />
        <Route path={`${match.url}/:threadId`}  render={(routerProps)=> <Thread forum={forum} {...routerProps} />} />

    </div>
)

export default ForumContainer;