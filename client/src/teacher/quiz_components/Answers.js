import React, {Component} from 'react';

class Answers extends Component {
    constructor(props){
        super(props);
        this.state = {
            answers: props.answers,
            numAnswers: props.answers.length,
            correctAnswer: props.correctAnswer
        };

        this.handleAddAnswerClick = this.handleAddAnswerClick.bind(this);
        this.handleRemoveAnswerClick = this.handleRemoveAnswerClick.bind(this);
        this.selectCorrectAnswer = this.selectCorrectAnswer.bind(this);
    }

    componentWillReceiveProps(newProps) {
        this.setState({ 
            answers: newProps.answers, 
            numAnswers: newProps.answers.length,
            correctAnswer: newProps.correctAnswer
        });  
    }

    handleAddAnswerClick(event){
        event.preventDefault();
        const num = this.state.numAnswers + 1;
        var tempAnswers = this.state.answers.concat('');
        this.setState({
            answers: tempAnswers,
            numAnswers: num
        });

        this.props.updateQuestionAnswerData(tempAnswers, this.props.questionNumber, this.state.correctAnswer);


    }

    handleAnswerChange(event, answerNum){
        const newAnswers = this.state.answers.map((key, index) => {
            if (answerNum === index) {
              return event.target.value;
            } else {
              return key;
            }
        });

        this.setState({
            answers: newAnswers
        });



        this.props.updateQuestionAnswerData(newAnswers, this.props.questionNumber, this.state.correctAnswer);

    }

    handleRemoveAnswerClick(event, index){
        event.preventDefault();
        const newAnswers = this.state.answers.filter((_, j) => j !== index);
        const newNumAnswers = this.state.numAnswers - 1;
        var newCorrectAnswer = -1;
        if(index < this.state.correctAnswer){
            newCorrectAnswer = this.state.correctAnswer - 1;
        } else if(index > this.state.correctAnswer){
            newCorrectAnswer = this.state.correctAnswer;
        }

        this.setState({
            answers: newAnswers,
            numAnswers: newNumAnswers,
            correctAnswer: newCorrectAnswer
        });
        
        this.props.updateQuestionAnswerData(newAnswers, this.props.questionNumber, newCorrectAnswer);
    }

    
    selectCorrectAnswer(index){
        console.log('answer ' + index + ' selected');
        this.setState({
            correctAnswer: index
        });

        this.props.updateQuestionAnswerData(this.state.answers, this.props.questionNumber, index);
    }


    render(){
        const answers = this.state.answers;

        return(
            <div>
                <label>
                {answers.map((key, index) => (
                    <div key={index}>
                        <label>
                            Mark Answer {index + 1} as correct:
                        </label>
                        <input
                            type="radio"
                            checked={this.state.correctAnswer === index}
                            onChange={() => {this.selectCorrectAnswer(index)}}
                            style={{marginRight:'10px'}}
                        />
                        <input 
                            type="text" 
                            name={index} 
                            onChange={(event) => {this.handleAnswerChange(event, index)}}
                            value={key}
                            style={{ width:"300px", marginRight:"10px" }}
                        />
                        <button onClick={(event) => {this.handleRemoveAnswerClick(event, index)}}>Remove Answer</button>
                    </div>
                ))}
                </label>
                <button onClick={this.handleAddAnswerClick}>Add Answer</button>
           </div>
        )
    } 
  
}

export default Answers;