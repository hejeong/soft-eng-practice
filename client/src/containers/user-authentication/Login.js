import React, {Component} from 'react';
import axios from 'axios'
import history from '../../History'
import Cookies from 'universal-cookie';
const cookies = new Cookies();

class Login extends Component{
    constructor(props) {
        super(props)
        this.state = {
              username: "",
              password: ""
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
               const data = res.data
               cookies.set('userInfo', data, {path: '/'})
               console.log(cookies.get('userInfo'))
               history.push('/forum')
            })
        }
      }
      
      render() {
        return (
          <form onSubmit={this.handleLogin.bind(this)}>
            <h3>Login</h3>
            <div>
                <label>NetID:</label>
                <div>
                    <input type="text" ref="username" placeholder="enter NetID"></input>
                </div>
            </div>
            <div>
                <label>Password:</label>
                <div>
                    <input type="password" ref="password" placeholder="enter password"></input>
                </div>
            </div>
            <input type="submit" value="Sign In" />
          </form>
        )
      }
    
}

export default Login;
