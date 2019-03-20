import React, { Component } from 'react';
import Quiz from '../components/Quiz';
class QuizContainer extends Component{
    constructor(props){
        super(props)
        console.log(props.quiz)
        this.state = {
            quiz: props.quiz.problems,
            selected: [],
            correct: []
        }
    }

    copyCurrentState = (current) => {
        console.log(current)
        this.setState({
            selected: current.selected,
            correct: current.correct
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('Number of Correct Answers: ' + this.state.correct.filter(value => value).length)
    }

    render(){
        return(
            <form id="quiz-form" onSubmit={this.handleSubmit}>
            <Quiz quiz={this.state.quiz} getCurrentState={this.copyCurrentState}/>
            <input type="submit" value="Submit Answers" />
            </form>
        )
    }
    
}
   

export default QuizContainer;