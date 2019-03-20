import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Thread from '../components/Thread'

class Forum extends Component{
    render() {
        const forum = this.props.threads
        return(
            <div className="forum">
                {forum.map((thread, index) => (
                    <NavLink className='thread' to={"/forum/"+thread.id} exact>{thread.title}</NavLink>
                ))}
            </div>
        );
    }
};

export default Forum;