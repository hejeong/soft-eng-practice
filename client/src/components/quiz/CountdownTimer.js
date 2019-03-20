import React, {Component} from 'react';

class CountdownTimer extends Component {
   state = {
     time: 1200,
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
           <h4 className="timer">Time Remaining: {`${minutes}:${seconds}`}</h4>
         </div>
       )
   }
   // clock functions
   clockTick = () => {
        this.setState(prevState => ({
          time: prevState.time-1
        }))
    }
}
export default CountdownTimer;