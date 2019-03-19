import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from '../containers/Home';
import Forum from '../containers/Forum';
import QuizContainer from '../containers/QuizContainer';
import NavBar from '../containers/NavBar';
import Test from '../components/Test'
import Thread from '../components/Thread'
import {forum} from '../data/Threads'

const App = (props) => {
    return(
        <Router>
            <React.Fragment>
             <NavBar/>
             <Route exact path='/' component={Home} />
             <Route exact path='/forum' render={Forum} />
             {forum.map((thread, index) => (
                <div>
                    <Route exact path={"/forum/" + thread.id} render={(props) => 
                            <Thread {...props} 
                                posts={forum[thread.id].posts}
                                title={forum[thread.id].title} 
                                id={forum[thread.id].id}
                                endorsed={forum[thread.id].endorsed}/>
                        }/>
                    </div>
             ))}
             <Route exact path='/quizzes' component={QuizContainer} />
            </React.Fragment>    
        </Router>
    );
};

export default App;
