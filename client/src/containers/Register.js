import React, {Component} from 'react';
import axios from 'axios'


class Register extends Component{
    constructor(props) {
        super(props)
        this.state = {
              fullname: "",
              username: "",
              password: ""
        };  
    }


    handleSignUp(e) {
        e.preventDefault()
        let fullname = this.refs.fullname.value;
        let username = this.refs.username.value;
        let password = this.refs.password.value;
        let passwordconf = this.refs.passwordconf.value;
        if (fullname === "" || username === "" || password === "" || passwordconf === ""){
            console.log("must enter values in all required fields...")
        }
        else if (password !== passwordconf){
            console.log("passwords dont match");
        }
        else{
         console.log('name:', fullname, '\nusername:', username, '\npassword:', password);
         //ADD THAT SHIT TO THE DATABASE
        }
      }
      
      render() {
        return (
          <form onSubmit={this.handleSignUp.bind(this)}>
            <h3>Register</h3>
            <div>
                <label>Name:</label>
                <div>
                    <input type="text" ref="fullname" placeholder="enter full name"></input>
                </div>
            </div>
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
            <div>
                <label>Confirm Password:</label>
                <div>
                    <input type="password" ref="passwordconf" placeholder="enter password again"></input>
                </div>
            </div>
            <input type="submit" value="Sign Up" />
          </form>
        )
      }
    
}

export default Register;
