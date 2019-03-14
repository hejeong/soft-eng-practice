import React, {Component} from 'react';
const alphabet = ['A', 'B', 'C', 'D', 'E', 'F']

const QuizAnswer = (props) => {
    const answers = props.answers;
    return(
        <React.Fragment>
            {answers.map((answer, index) => (
                <div class='answer-choice'>{alphabet[index]}. {answer}</div>
            ))}
        </React.Fragment>
    )
}

export default QuizAnswer;