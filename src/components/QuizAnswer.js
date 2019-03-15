import React, {Component} from 'react';
const alphabet = ['A', 'B', 'C', 'D', 'E', 'F']

class QuizAnswer extends Component{
    constructor(){
        super()
        this.state = {
            selected: '',
            done: false
        }
    }

    handleClick = (event) => {
        event.preventDefault()
        this.setState({
            selected: event.target.value,
            done: true
        })
    }

    validateAnswer = (value) => {
        let match = '';
        if(this.state.done === true){
            if(this.state.selected === value){
                match = true;
                const rightAnswer = this.props.solution === this.state.selected ? true : false;
                return match && rightAnswer ? ' correct-answer selected' : ' wrong-answer selected'
            }else if(value === this.props.solution){
                return ' correct-answer solution'
            }else {
                return ' not-active'
            }
        }else{
            return ''
        }
       
    }   
    render(){
        const answers = this.props.answers;
        return(
            <React.Fragment>
                {answers.map((answer, index) => (
                <button key={index} className={'answer-choice' + this.validateAnswer(answer)} value={answer} onClick={this.handleClick}>{alphabet[index]}. {answer}</button>
                ))} 
                <br />
                <button className="next"><span>Next Question</span></button>
            </React.Fragment>
        )
    }
            
}

export default QuizAnswer;