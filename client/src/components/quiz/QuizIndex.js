import React from 'react';
import { Route, Link } from 'react-router-dom'
import QuizContainer from '../../containers/QuizContainer'
const QuizIndex = ({match, quizzes}) => {
        const renderQuizIndex = quizzes.map((quiz, index) => <Link className="quiz-link" key={index} to={`/quizzes/${index}`}>Quiz {index+1}</Link>)
    
        return(
            <div>              
                <Route exact path={match.url} render={()=>(
                    renderQuizIndex
                )} />
                {quizzes.map((quiz, index) => (
                 <Route key={index} path={`${match.url}/${index}`}  render={(routerProps)=> <QuizContainer quizzes={quizzes} quizNum={index} />} />
                ))}
            </div>
        )
    
}
export default QuizIndex;