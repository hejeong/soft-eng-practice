import React, { Component } from 'react';
import Quiz from '../components/Quiz';
import axios from "axios";

class QuizContainer extends Component{
    constructor(props){
        super(props)
        console.log(props.quiz)
        this.state = {
            quizzes: props.quizzes,
            quizNum: props.quizNum,
            quizId: props.quizzes[props.quizNum].quizid,
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

    submitQuizToDb = (numCorrect) => {
        let currentIds = this.state.quizzes.map(data => data.id);
        let idToBeAdded = 0;
        while (currentIds.includes(idToBeAdded)) {
          ++idToBeAdded;
        }
    
        axios.post("http://localhost:3001/api/submitQuiz", {
          id: idToBeAdded,
          quizId: this.state.quizId,
          score: numCorrect
        })
        .then(res => console.log(res.data));

    };

    handleSubmit = (event) => {
        event.preventDefault();
        const numCorrect = this.state.correct.filter(value => value).length;
        this.submitQuizToDb(numCorrect);
        //console.log('Number of Correct Answers: ' + this.state.correct.filter(value => value).length)
    }

    render(){
        const currentQuiz = this.state.quizzes[this.state.quizNum].problems;
        return(
            <form id="quiz-form" onSubmit={this.handleSubmit}>
            <Quiz quiz={currentQuiz} getCurrentState={this.copyCurrentState}/>
            <input type="submit" value="Submit Answers" />
            </form>
        )
    }
    
}
   

export default QuizContainer;