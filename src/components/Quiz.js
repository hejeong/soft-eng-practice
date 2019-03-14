import React, {Component} from 'react';
import QuizAnswer from './QuizAnswer';
const Quiz = (props) => {
    const quizzes = props.quizzes
    return(
        <div>
        {quizzes.map((quiz, index) => (
            <form key={index}>
                <label id="question">{quiz.question}</label>
                <QuizAnswer answers={quiz.answers} />
            </form>
        ))}
        </div>
    )
} 
  

export default Quiz;