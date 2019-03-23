import React, {Component} from 'react';
import axios from 'axios'
import Cookies from 'universal-cookie';
import history from '../../History'
import { Link } from 'react-router-dom';
const cookies = new Cookies();

class NewThread extends Component{
    constructor(props) {
        super(props)
        this.state = {
            searchInfo: [],
            title:"",
            post: [],
            clicked: false,
            times: 0
        };  
    }

    handleTitleChange = () => {
        this.setState({
          title: this.newTitle.value,
        })
      }

    handlePostChange = () => {
        this.setState({
          post: this.newPost.value,
        })
    }

    postThread = () => {
        const title = this.state.title
        const post = this.state.post
        const user = (cookies.get('userInfo')).id
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
            <div>
            <form>
                <input
                    placeholder="Title"
                    ref={titleInput => this.newTitle = titleInput}
                    onChange={this.handleTitleChange}
                />
                <input
                    placeholder="Post"
                    ref={postInput => this.newPost = postInput}
                    onChange={this.handlePostChange}
                />
                <p>{this.state.title}</p>
                <p>{this.state.post}</p>
            </form>
            <Link to="/forum" exact> <button onClick={this.submit}>Post</button></Link>
            </div>
        )   
    } 
    
}

export default NewThread;