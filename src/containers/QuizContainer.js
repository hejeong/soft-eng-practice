import React from 'react';
import Quiz from '../components/Quiz';
import {quizzes} from '../data/Quizzes'
const QuizContainer = () => {
    
    return(
        <Quiz quizzes={quizzes}/>
    )
    
}
   

export default QuizContainer;