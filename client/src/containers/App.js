import React, { Component } from 'react';
import {Router, Route} from 'react-router-dom';
import Home from '../containers/Home';
import Register from './user-authentication/Register';
import Login from './user-authentication/Login';
import ForumContainer from './ForumContainer';
import GradesContainer from './gradebook/GradesContainer';
import QuizIndex from '../components/quiz/QuizIndex';
import NavBar from '../containers/NavBar';
import history from '../History';
import axios from 'axios';
import Cookies from 'universal-cookie'
import {checkLoggedIn} from '../login-helpers';
const cookies = new Cookies();
class App extends Component {
    constructor(props){
        super(props)
        this.state={
        userData: [],
        forumData: [],
        quizzesData: [],
        completedQuizzesData: [],
        gradesData: [],
        userInfo: []
        
    }}
    
    componentDidMount(){
        cookies.remove('forumInfo', { path: '/' })
        this.getUserDataFromDb();
        this.getForumDataFromDb();
        this.getQuizDataFromDb();
        this.getGradesDataFromDb();
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
          .then(data => data.json())
          .then(res => this.setState({ quizzesData: res.data }));
    };

    getGradesDataFromDb = () => {
        axios.get('http://localhost:3001/api/getGrades', {params: {
            member: this.state.userInfo.id,
            classes: this.state.userInfo.classes
        }})
        .then(res => {
            const gradeInfo = res.data 
            cookies.set('gradeInfo', gradeInfo, { path: '/' });
        });
    };

    render(){
        return(
        <Router history={history}>
            <React.Fragment>
                <NavBar/>
                <Route exact path='/' component={Home} />
                <Route exact path='/register' component={Register} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/grades' render={routerProps => <GradesContainer {...routerProps} grades={cookies.get('gradeInfo')}/>} />
                <Route path='/forum' render={routerProps => <ForumContainer {...routerProps}/> }/>
                <Route path='/quizzes' render={routerProps => <QuizIndex {...routerProps} quizzes={this.state.quizzesData} />} />
            </React.Fragment>    
        </Router>
        );
    }
};

export default App;
