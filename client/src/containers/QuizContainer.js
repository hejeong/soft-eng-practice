import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';
import Quiz from '../components/quiz/Quiz';
import CountdownTimer from '../components/quiz/CountdownTimer';
import axios from "axios";
import history from '../History'

class QuizContainer extends Component{
    constructor(props){
        super(props)
        this.state = {
            quizzes: props.quizzes,
            quizNum: props.quizNum,
            quizId: props.quizzes[props.quizNum].quizid,
            selected: [],
            correct: [],
            time: 0
        }
    }

    componentDidMount(){
        this.startInterval();
    }

    componentWillUnmount(){
        this.cleanUpInterval();
    }

    startInterval = () => {
        this.interval = setInterval(this.clockTick, 1000);
    };

    cleanUpInterval = () => {
        clearInterval(this.interval);
    };

    copyCurrentState = (current) => {
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

    handleSubmit = () => {
        const numCorrect = this.state.correct.filter(value => value).length;
        this.submitQuizToDb(numCorrect);
        history.push('/quizzes')
        //console.log('Number of Correct Answers: ' + this.state.correct.filter(value => value).length)
    }

    render(){
        const currentQuiz = this.state.quizzes[this.state.quizNum].problems;
        return(
            <form id="quiz-form">
            <CountdownTimer quizId={this.state.quizId} autoSubmit={this.handleSubmit}/>
            <br/>
            <Quiz quiz={currentQuiz} getCurrentState={this.copyCurrentState}/>
            <div className="link-button" onClick={this.handleSubmit}>Submit Answers</div>
            </form>
        )
    }
 
}
   

export default QuizContainer;