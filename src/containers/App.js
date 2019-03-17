import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from '../containers/Home';
import NavBar from '../containers/NavBar';

const App = (props) => {
    return(
        <div>
        <NavBar />
        <Router>
            <React.Fragment>
             <Route exact path="/" component={Home}></Route>
            </React.Fragment>    
        </Router>
        </div>
    );
};

export default App;
