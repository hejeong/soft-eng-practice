import React, {Component} from 'react';
import axios from 'axios'
import {Route, Link} from 'react-router-dom';
import ForumContainer from './ForumContainer';
import Cookies from 'universal-cookie';
import history from '../History'
const cookies = new Cookies();
class Home extends Component{
    constructor(props) {
        super(props)
        this.state = {
            
        };  
    }
      
    render(){
        if(!!cookies.get('userId')){
            return(<div>Welcome, {cookies.get('userName')}!</div>)
        }
        cookies.set('redirectPath', '/', {path: '/'} )
        return(
            <div>
                this is home
                <br></br>
                <Link to='/login'><button className="login-button">Login</button></Link>
                <Link to='/register'><button className="login-button">Register</button></Link>
            </div>
        )   
    } 
    
}

export default Home;