import React, { Component } from 'react';
import {Router, Route} from 'react-router-dom';
import Home from '../containers/Home';
import ForumContainer from './ForumContainer';
import GradesContainer from './GradesContainer';
import QuizIndex from '../components/quiz/QuizIndex';
import NavBar from '../containers/NavBar';
import history from '../History'
import axios from 'axios'
import Cookies from 'universal-cookie';
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
        userInfo: {
            id:"pb431",
            password:'rKZJhyu',
            name: "Patricia Battipaglia",
            classes: [
                '52314',
                '12345'
            ]
                
        }
        
    }}
    
    componentDidMount(){
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
        fetch("http://localhost:3001/api/getForums")
          .then(data => data.json())
          .then(res => this.setState({ forumData: res.data }));
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
            this.setState({ gradesData: res.data })
        });
    };

    render(){
        const info = this.state.userInfo
        cookies.set('userInfo', info, { path: '/' });
        return(
        <Router history={history}>
            <React.Fragment>
            <h1 className='App-title'>Welcome to React</h1>
                <NavBar/>
                <Route exact path='/' component={Home} />
                <Route exact path='/grades' render={routerProps => <GradesContainer {...routerProps} grades={this.state.gradesData}/>} />
                <Route path='/forum' render={routerProps => <ForumContainer {...routerProps} forum={this.state.forumData}/> }/>
                <Route path='/quizzes' render={routerProps => <QuizIndex {...routerProps} quizzes={this.state.quizzesData} />} />
            </React.Fragment>    
        </Router>
        );
    }
};

export default App;
