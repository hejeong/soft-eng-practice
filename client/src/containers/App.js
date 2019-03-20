import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from '../containers/Home';
import ForumContainer from './ForumContainer';
import QuizContainer from '../containers/QuizContainer';
import NavBar from '../containers/NavBar';
import {forum} from '../data/Threads'


class App extends Component {
    state={
        userData: [],
        forumData: []
    }
    componentDidMount(){
        this.getUserDataFromDb();
        this.getForumDataFromDb();
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

    render(){
        return(
        <Router>
            <React.Fragment>
                
                <NavBar/>
                <Route exact path='/' component={Home} />
                <Route path='/forum' render={routerProps => <ForumContainer {...routerProps} forum={this.state.forumData} />} />
             <Route exact path='/quizzes' component={QuizContainer} />
            </React.Fragment>    
        </Router>
        );
    }
};

export default App;
