import React, {Component} from 'react';
import QuizAnswer from './QuizAnswer';
class Quiz extends Component {
    constructor(props){
        super(props)
        const len = props.quizzes.length;
        this.state = {
            selected: new Array(len).fill(null) 
        }
    }

    handleClick = (questionNum , answerPicked) => {
        let newSelect = this.state.selected.slice();
        newSelect[questionNum] = answerPicked;
        this.setState({
            selected: newSelect 
        })
    }

    render(){
        const quizzes = this.props.quizzes
        return(
            <div>
                {quizzes.map((quiz, index) => (
                <div key={index} question={index}>
                    <label className="question">{quiz.question}</label> <br />
                    <QuizAnswer questionNum={index} 
                        answers={quiz.answers} 
                        solution={quiz.solution} 
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