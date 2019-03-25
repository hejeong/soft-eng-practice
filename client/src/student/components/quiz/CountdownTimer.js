import React, {Component} from 'react';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

class CountdownTimer extends Component {
   constructor(props){
     super(props)
     // keep track of time started in cookies so that any redirect will still eat away at the quiz taker's time
     if(!cookies.get('quizStartedAt')){
      cookies.set('quizStartedAt', Date.now(), { path: '/' });
     }
     let remainingTime = Date.now() - cookies.get('quizStartedAt');
     if(remainingTime >= props.timeLimit){
       cookies.remove('quizStartedAt',{ path: '/' });
       remainingTime = 0
     }else{
       remainingTime = (props.timeLimit-remainingTime);
     }
     this.state = {
      time: remainingTime,
     }
   }

   componentDidMount(){
        this.interval = setInterval(this.clockTick, 1000)
   }

   componentWillUnmount(){
        clearInterval(this.interval)
   }

   render(){
       const time = Math.round(this.state.time/1000);
       let minutes = ("0" + Math.floor(time / 60)).slice(-2);
       let seconds =  ("0" + time % 60).slice(-2);
       return(
         <div className="timer-box">
           <h4 className="timer" >Time Remaining: {`${minutes}:${seconds}`}</h4>
           <h3 className="quiz-title">Quiz {this.props.quizId}</h3>
           <h3 className="user-name">Jonathan Hong</h3>
         </div>
       )
   }
   // clock functions
   clockTick = () => {
     if(this.state.time === 0){
         this.props.autoSubmit()
     }else{
        this.setState(prevState => ({
          time: prevState.time-1000
        }))
     }
    }
}
export default CountdownTimer;
