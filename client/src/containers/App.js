import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from '../containers/Home';
import ForumContainer from './ForumContainer';
import QuizContainer from '../containers/QuizContainer';
import NavBar from '../containers/NavBar';
import axios from "axios";
import Thread from '../components/Thread'
import {forum} from '../data/Threads'

class App extends Component {
    state={
        data: []
    }
    componentDidMount(){
        this.getDataFromDb();
    }
    
    getDataFromDb = () => {
        fetch("http://localhost:3001/api/getUsers")
          .then(data => data.json())
          .then(res => this.setState({ data: res.data }));
    };

    render(){
        return(
        <Router>
            <React.Fragment>
                <NavBar/>
                <Route exact path='/' component={Home} />
                <Route path='/forum' render={routerProps => <ForumContainer {...routerProps} forum={forum} />} />
             <Route exact path='/quizzes' component={QuizContainer} />
            </React.Fragment>    
        </Router>
        );
    }
};

export default App;
