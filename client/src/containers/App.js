import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from '../containers/Home';
import ForumContainer from './ForumContainer';
import QuizIndex from '../components/quiz/QuizIndex';
import NavBar from '../containers/NavBar';
import {forum} from '../data/Threads'


class App extends Component {
    state={
        userData: [],
        forumData: [],
        quizzesData: [],
        completedQuizzesData: []
    }
    componentDidMount(){
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
        fetch("http://localhost:3001/api/getForums")
          .then(data => data.json())
          .then(res => this.setState({ forumData: res.data }));
    };

    getQuizDataFromDb = () => {
        fetch("http://localhost:3001/api/getQuizzes")
          .then(data => data.json())
          .then(res => this.setState({ quizzesData: res.data }));
    };

  

    render(){
        return(
        <Router>
            <React.Fragment>
                
                <NavBar/>
                <Route exact path='/' component={Home} />
                <Route path='/forum' render={routerProps => <ForumContainer {...routerProps} forum={forum} />} />
             <Route path='/quizzes' render={routerProps => <QuizIndex {...routerProps} quizzes={this.state.quizzesData} />} />
            </React.Fragment>    
        </Router>
        );
    }
};

export default App;
