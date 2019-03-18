import React, {Component} from 'react';

class QuizAnswer extends Component{

    checkSelected = (question, index) => {
       // document.querySelector(`[question='${question}'] [index='${index}'] [type='checkbox']`).checked = true;
     //  console.log(document.querySelector(`[question='0'] [index='0'] [type='checkbox']`));
       if(parseInt(this.props.selected,10) === index){
          return ' selected';
       }else{
          return '';
       }
    }
    handleClick = (event) => {
        const answerNum = event.target.getAttribute('index')   
        this.props.clickAction(this.props.questionNum,answerNum);
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
                    <input type="checkbox" />
                    {answer}
                </div>
                ))} 
                <br />
            </React.Fragment>
        )
    }
            
}

export default QuizAnswer;