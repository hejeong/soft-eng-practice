import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Forum from '../containers/Forum';

const Forum = (props) => {
    return(
        <Router>
            <React.Fragment>
             <Route exact path="/Forum" component={Forum}></Route>
            </React.Fragment>    
        </Router>
    );
};

export default App;
