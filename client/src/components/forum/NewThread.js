import React, {Component} from 'react';
import axios from 'axios'
import Cookies from 'universal-cookie';
import history from '../../History'
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField'
const cookies = new Cookies();

class NewThread extends Component{
    constructor(props) {
        super(props)
        this.state = {
            searchInfo: [],
            title:"",
            post: "",
            clicked: false,
            times: 0
        };  
    }

    handleTitleChange = title => event => {
        this.setState({
          title: event.target.value,
        });
    };

    handlePostChange = name => event => {
        this.setState({
          post: event.target.value,
        });
    };
    postThread = () => {
        const title = this.state.title
        const post = this.state.post
        const user = (cookies.get('userId'))
        axios.post("http://localhost:3001/api/submitThread", {
          title: title,
          posts: post,
          users: user
        })
        .then(res => console.log(res.data));
        this.setState({times: 0})

    };

    submit = () => {
        this.postThread();
        history.push('/forum')
    }

    render(){
        return(
            <div style={{backgroundColor:'white'}}>
            <form>
                <TextField
                id="title"
                label="Title"
                value={this.state.title}
                onChange={this.handleTitleChange('title')}
                margin="normal"
                variant="filled"
                />
                <p>
                <TextField
                id="post"
                label="Post"
                value={this.state.name}
                onChange={this.handlePostChange('name')}
                margin="normal"
                variant="filled"
                />
                </p>
                <p style={{color:'black'}}>{this.state.title}</p>
                <p style={{color:'black'}}>{this.state.post}</p>
            </form>
            <Link to="/forum" exact> <button onClick={this.submit}>Post</button></Link>
            </div>
        )   
    } 
    
}

export default NewThread;