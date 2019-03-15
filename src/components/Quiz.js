import React, {Component} from 'react';
import QuizAnswer from './QuizAnswer';
class Quiz extends Component {
   
    render(){
        const quizzes = this.props.quizzes
        return(
            <div>
                {quizzes.map((quiz, index) => (
                <form key={index}>
                    <label id="question">{quiz.question}</label> <br />
                    <QuizAnswer answers={quiz.answers} solution={quiz.solution} />
                </form>
                ))}
           </div>
        )
    } 
  
}
export default Quiz;