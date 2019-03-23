import React, {Component} from 'react';
import axios from 'axios'
import {Route} from 'react-router-dom';
import ForumContainer from './ForumContainer';
import {checkLoggedIn} from '../login-helpers';
class Home extends Component{
    constructor(props) {
        super(props)
        checkLoggedIn();
        this.state = {
            
        };  
    }
      
    render(){
        return(
            <div>
                this is home
            </div>
        )   
    } 
    
}

export default Home;