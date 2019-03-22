import React, {Component} from 'react';
import axios from 'axios'


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
         console.log('username:', username, '\npassword:', password);
         //CHECK THAT SHIT IN THE DATABASE
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
