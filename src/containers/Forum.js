import React from 'react';
import {forum} from '../data/Threads'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Thread from '../components/Thread'
import { NavLink } from 'react-router-dom';

function Forum() {
    return(
        <div className="forum">
            {forum.map((thread, index) => (
                    <NavLink className='thread' to={"/forum/" + thread.id} exact>
                        {thread.title}
                        <Router>
                            <Route exact path={"/forum/" + thread.id} render={(props) => 
                                <Thread {...props} 
                                posts={thread.posts} 
                                title={thread.title} 
                                id={thread.id} 
                                endorsed={thread.endorsed}/>
                            }/>
                        </Router>
                    </NavLink>
            ))}
        </div>
    );
};

export default Forum;