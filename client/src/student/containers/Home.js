import React, {Component} from 'react';
import axios from 'axios'
import {Route, Link} from 'react-router-dom';
import ForumContainer from './ForumContainer';
import Cookies from 'universal-cookie';
import Login from '../../Login'
import history from '../../History'
const cookies = new Cookies();
class Home extends Component{
    constructor(props) {
        super(props)
        this.state = {
            userData: [],
        forumData: [],
        quizzesData: [],
        completedQuizzesData: [],
        gradesData: [],
        userInfo: []
        };  
    }

    componentDidMount(){
        cookies.remove('forumInfo', { path: '/' })
        this.getUserDataFromDb();
        this.getForumDataFromDb();
        this.getQuizDataFromDb();
    }
    
    getUserDataFromDb = () => {
        fetch("http://localhost:3001/api/getUsers")
          .then(data => data.json())
          .then(res => this.setState({ userData: res.data }));
    };

    getForumDataFromDb = () => {
        axios.get("http://localhost:3001/api/getForums")
        .then(res => {
            const forumInfo = res.data 
            cookies.set('forumInfo', forumInfo, { path: '/' });
        });
    };

    getQuizDataFromDb = () => {
        fetch("http://localhost:3001/api/getQuizzes")
        .then(res => {
            const quizData = res.data 
            cookies.set('quizData', quizData, { path: '/' });
        });
    };

      
    render(){
        if(!!cookies.get('userId')){
            return(<div>Welcome, {cookies.get('userName')}!</div>)
        }
        return(
            <div>
                relogged in
            </div>
        )   
    } 
    
}

export default Home;