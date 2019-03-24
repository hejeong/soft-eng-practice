import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import QuizContainer from '../containers/QuizContainer'

class MenuButton extends React.Component {
  state = {
    toDashboard: false,
  }

  handleSubmit = () => this.setState(() => ({
        toDashboard: true
  }))
  

  render() {
    if (this.state.toDashboard === true) {
      return(
        <Router>
          <React.Fragment>
            <Route exact path="/Quiz" component={QuizContainer}></Route>
          </React.Fragment>    
        </Router>
      )
    }

    return (
      <button onSubmit={this.handleSubmit}> 
      bitch
      </button>
    )
  }
}

export default MenuButton