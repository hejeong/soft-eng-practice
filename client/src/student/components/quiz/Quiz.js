import React, {Component} from 'react';
import QuizAnswer from './QuizAnswer';
class Quiz extends Component {
    constructor(props){
        super(props)
        const len = props.quiz.length;
        this.state = {
            quiz: props.quiz,
            selected: new Array(len).fill(null),
            correct: new Array(len).fill(false)
        }
    }

    handleClick = (questionNum , answerPicked, isCorrect) => {
        let newSelect = this.state.selected.slice();
        let newCorrect = this.state.correct.slice();
        newSelect[questionNum] = answerPicked;
        newCorrect[questionNum] = isCorrect;
        this.setState({
            selected: newSelect,
            correct: newCorrect
        })
        this.props.getCurrentState({
            selected: newSelect,
            correct: newCorrect
        });
    }

    render(){
        const questions = this.state.quiz;
        return(
            <div>
                {questions.map((quiz, index) => (
                <div key={index} question={index}>
                    <label className="question">{quiz[0]}</label> <br />
                    <QuizAnswer questionNum={index} 
                        answers={quiz[1]} 
                        solution={quiz[1]} 
                        selected={this.state.selected[index]}
                        clickAction={this.handleClick}
                    />
                </div>
                ))}
           </div>
        )
    } 
  
}
export default Quiz;