import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
//import NavBar from '../components/NavBar';
import QuizContainer from '../containers/QuizContainer';
const App = (props) => {
    return(
        <Router>
            <React.Fragment>
             <Route exact path="/" component={QuizContainer}></Route>
            </React.Fragment>    
        </Router>
    );
};

export default App;
