import React, {Component} from 'react';

class CountdownTimer extends Component {
   state = {
     time: this.props.timeLimit,
   }

   componentDidMount(){
        this.interval = setInterval(this.clockTick, 1000)
   }

   componentWillUnmount(){
        clearInterval(this.interval)
   }

   render(){
       const time = this.state.time;
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
          time: prevState.time-1
        }))
     }
    }
}
export default CountdownTimer;
