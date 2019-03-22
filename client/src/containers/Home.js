import React, {Component} from 'react';
import axios from 'axios'
import {Route} from 'react-router-dom';
import ForumContainer from './ForumContainer';

class Home extends Component{
    constructor(props) {
        super(props)
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