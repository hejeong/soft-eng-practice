import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import Cookies from 'universal-cookie';
const cookies = new Cookies();


class Forum extends Component {
  constructor(props){
    super(props)
    this.state = {
      forum: (cookies.get('forumInfo')).data,
      query: ''
    }
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value,
    })
  }
  searchForum = (event) => {
    const query = this.state.query
    axios.get('http://localhost:3001/api/searchForum', {params: {title:query}})
     .then(res =>{
      this.setState({
        forum: res.data.data
      })
     })
  }

  render(){
    return(
        <div>
            <input
              placeholder="Search for..."
              ref={input => this.search = input}
              onChange={this.handleInputChange}
            />
            <p>{this.state.query}</p>
            <button onClick={this.searchForum}>Search</button>
          {Object.keys(this.state.forum).map(threadId =>
          <div key={threadId}>
          <Link to={`/forum/${threadId}`}><button className='thread'>{this.state.forum[threadId].title}</button></Link>
            <br/>
            <br/>
        </div>)}
        </div>
    )
  }
}
 
export default Forum;
 