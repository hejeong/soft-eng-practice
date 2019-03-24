import React, {Component} from 'react';

class QuizAnswer extends Component{

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
        const correct = event.target.getAttribute('value') === this.props.solution ? true : false;
        this.props.clickAction(this.props.questionNum,answerNum, correct);
    }
    
    render(){
        const answers = this.props.answers;
        const qNum = this.props.questionNum;
        return(
            <React.Fragment>
                {answers.map((answer, index) => (
                <div key={index} 
                    index = {index}
                    className={'answer-choice' + this.checkSelected(qNum, index)}
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