import React from 'react';
import {forum} from '../data/Threads'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Thread from '../components/Thread'
import { NavLink } from 'react-router-dom';

function Forum() {
    return(
        <div className="forum">
            {forum.map((thread, index) => (
                <div>
                    <NavLink className='thread' to={"/forum/" + thread.id} exact>
                        {thread.title}
                    </NavLink>
                </div>
            ))}
        </div>
    );
};

export default Forum;