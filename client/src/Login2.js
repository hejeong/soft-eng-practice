import React, {Component} from 'react';
import axios from 'axios';
import history from './History';
import Cookies from 'universal-cookie';
import StudentApp from './student/containers/StudentApp'
import Home from './student/containers/Home'
import {Router, Route, Link, Redirect} from 'react-router-dom';
import Register from './student/containers/user-authentication/Register';
import ForumContainer from './student/containers/ForumContainer';
import GradesContainer from './student/containers/gradebook/GradesContainer';
import QuizIndex from './student/components/quiz/QuizIndex';
import NavBar from './student/containers/NavBar';
const cookies = new Cookies();

class Login2 extends Component{
    constructor(props) {
        super(props)
        this.state = {
              username: "",
              password: "",
        };  
    }


    handleLogin(e) {
        e.preventDefault()
        let username = this.refs.username.value;
        let password = this.refs.password.value;
        if (username === "" || password === ""){
            console.log("must enter values in all required fields...")
        }
        else{
         console.log('id:', username, '\npassword:', password);
         //CHECK THAT SHIT IN THE DATABASE
            axios.get('http://localhost:3001/api/loginUser', {params: {id:username, password:password}})
            .then(res =>{
                return res.data
             })
             .then(data => {
                 console.log((data.data)[0])
                cookies.set('userId', (data.data)[0].id, {path: '/'})
                cookies.set('userName', (data.data)[0].name, {path: '/'})
                cookies.set('userClasses', (data.data)[0].classes, {path: '/'})
                cookies.set('userType', (data.data)[0].type, {path: '/'})
            })
            .then(history.push('/home'))
        }
      }
      
      render() {
          if(!!this.state.userData){
            if(this.state.userData.length !== 0){
                    cookies.set('userId', this.state.userData[0].id, {path: '/'})
                    cookies.set('userName', this.state.userData[0].name, {path: '/'})
                    cookies.set('userClasses', this.state.userData[0].classes, {path: '/'})
                    cookies.set('userType', this.state.userData[0].type, {path: '/'})
            }
        }
        console.log('hey this is login2')
        {if (!cookies.get('userId')) {
        return (
            <form onSubmit={this.handleLogin.bind(this)}>
            <h3>Login</h3>
            <div>
                <label>NetID:</label>
                <div>
                    <input type="text" ref="username" placeholder="enter NetID"></input>
                </div>
                <h4>{this.state.userData}</h4>
            </div>
            <div>
                <label>Password:</label>
                <div>
                    <input type="password" ref="password" placeholder="enter password"></input>
                </div>
            </div>
            <input type="submit" value="Sign In" />
        </form>
        )}
        else {
            return(<h1>hi</h1>)
        }
      }
}}

export default Login2;