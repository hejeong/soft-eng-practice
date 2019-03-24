import React, {Component} from 'react';
const shuffle = require('shuffle-array');
class QuizAnswer extends Component{
    state = {
        rightAnswer: this.props.answers[0],
        shuffledAnswers: shuffle(this.props.answers,{ 'copy': true })
    }
    checkSelected = (question, index) => {    
      let checkbox = document.querySelector(`[question='${question}'] [index='${index}'] [type='checkbox']`)
      if(checkbox === null){
          return '';
      }else if(parseInt(this.props.selected,10) === index){
          checkbox.checked = true;
          return ' selected';
       }else{
          checkbox.checked = false;
          return '';
       }
    }
    handleClick = (event) => {
        const answerNum = event.target.getAttribute('index')
        //check solution
        const correct = event.target.getAttribute('value') === this.state.rightAnswer ? true : false;
        this.props.clickAction(this.props.questionNum,answerNum, correct);
    }
    
    render(){
        const qNum = this.props.questionNum;
        return(
            <React.Fragment>
                {this.state.shuffledAnswers.map((answer, index) => (
                <div key={index} 
                    index = {index}
                    className={'answer-choice clear' + this.checkSelected(qNum, index)}
                    value={answer} 
                    onClick={this.handleClick}>
                    <input type="checkbox"  />
                    {answer}
                </div>
                ))} 
                <br />
            </React.Fragment>
        )
    }
            
}

export default QuizAnswer;