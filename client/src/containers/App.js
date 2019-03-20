import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from '../containers/Home';
import ForumContainer from './ForumContainer';
import QuizContainer from '../containers/QuizContainer';
import NavBar from '../containers/NavBar';
<<<<<<< HEAD
=======
import axios from "axios";
import Thread from '../components/Thread'
>>>>>>> 057f049e35140d6bfaf1f312c3c6803770928a2b
import {forum} from '../data/Threads'
import Thread from '../components/Thread'

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
<<<<<<< HEAD
                <Route exact path='/forum' component={(props) =>
                    <Forum {...props}
                        threads={this.state.forumData} 
                    />
                }/>
                {(this.state.forumData).map((thread, index) => (
                    <Route exact path={"/forum/" + thread.id} component={(props) => 
                        <Thread {...props} 
                            posts={thread.posts}
                            title={thread.title} 
                            id={thread.id}
                            endorsed={thread.endorsed}
                        />
                    }/>
                ))}
                <Route exact path='/quizzes' component={QuizContainer} />
=======
                <Route path='/forum' render={routerProps => <ForumContainer {...routerProps} forum={forum} />} />
             <Route exact path='/quizzes' component={QuizContainer} />
>>>>>>> 057f049e35140d6bfaf1f312c3c6803770928a2b
            </React.Fragment>    
        </Router>
        );
    }
};

export default App;
