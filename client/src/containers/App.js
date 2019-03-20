import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from '../containers/Home';
import ForumContainer from './ForumContainer';
import QuizIndex from '../components/QuizIndex';
import NavBar from '../containers/NavBar';
import axios from "axios";
import Thread from '../components/Thread'
import {forum} from '../data/Threads'

class App extends Component {
    state={
        quizzes: []
    }
    
    componentDidMount(){
        this.getQuizzesFromDb();
    }
    
    getQuizzesFromDb = () => {
        fetch("http://localhost:3001/api/getQuizzes")
          .then(data => data.json())
          .then(res => {
              this.setState({ quizzes: res.data })
          });
    };

    render(){
        return(
        <Router>
            <React.Fragment>
                <NavBar/>
                <Route exact path='/' component={Home} />
                <Route path='/forum' render={routerProps => <ForumContainer {...routerProps} forum={forum} />} />
             <Route path='/quizzes' render={routerProps => <QuizIndex {...routerProps} quizzes={this.state.quizzes} />} />
            </React.Fragment>    
        </Router>
        );
    }
};

export default App;
