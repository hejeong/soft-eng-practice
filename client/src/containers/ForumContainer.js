import React from 'react';
import {Route} from 'react-router-dom';
import Thread from '../components/forum/Thread'
import Forum from '../components/forum/Forum';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

const ForumContainer = ({match, forum}) => {
    const searchInfo = cookies.get('searchInfo');
    if(!!searchInfo){
        forum = searchInfo.data;
        cookies.remove('searchInfo',{ path: '/forum' });
    }
    return(
    <div className='forum'>
<<<<<<< HEAD
        <SearchBar/>
=======
        <br/>
>>>>>>> 803d29ef0e9bea5cb829ed703567ed7d29b97adb
        <Route exact path={match.url} render={()=>(
             <Forum forum={forum} />
        )} />
        <Route path={`${match.url}/:threadId`}  render={(routerProps)=> <Thread forum={forum} {...routerProps} />} />

    </div>)
}

export default ForumContainer;