import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Thread from '../components/forum/Thread'
import Forum from '../components/forum/Forum';
import NewThreadBar from '../components/forum/NewThreadBar'
import axios from 'axios'
import Cookies from 'universal-cookie';
const cookies = new Cookies();

class ForumContainer extends Component{
    constructor(props){
        super(props)
        this.state = {
            match: props.match,
        }
    }

    getForumDataFromDb = () => {
        axios.get("http://localhost:3001/api/getForums")
        .then(res => {
            const forumInfo = res.data 
            cookies.set('forumInfo', forumInfo, { path: '/' });
        });
    };
    
    componentDidMount(){
        this.getForumDataFromDb();
    }

    render(){
    return(
        <>
        <NewThreadBar/>
    <div className='forum' style={{height: '200%'}}>
        <br/>
        <Route exact path={(this.state.match).url} render={()=>(
             <Forum />
        )} />
        <Route path={`${(this.state.match).url}/:threadId`}  render={(routerProps)=> <Thread {...routerProps} />} />

    </div>
    </>)}
}

export default ForumContainer;