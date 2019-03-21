import React, {Component} from 'react';
import axios from 'axios'
import {Route} from 'react-router-dom';
import ForumContainer from './ForumContainer';

class Home extends Component{
    constructor(props) {
        super(props)
        this.state = {
              searchInfo: [],
              query: "",
              clicked: false,
              times: 0
        };  
    }
    searchForum = (event) => {
        this.setState({
            clicked: true,
            times: this.state.times + 1
        })
        const query = this.state.query
        axios.get('http://localhost:3001/api/searchForum', {params: {title:query}})
         .then(res =>{
            const searchInfo = res.data 
  
            this.setState({ searchInfo });
         })
         console.log(this.state.searchInfo)
         
    };

    handleInputChange = () => {
        this.setState({
          query: this.search.value,
        })
      }
      
    render(){
        const data = this.state.searchInfo.data
        return(
            <div>
            <form>
                <input
                    placeholder="Search for..."
                    ref={input => this.search = input}
                    onChange={this.handleInputChange}
                />
                <p>{this.state.query}</p>
            </form>
            <button onClick={this.searchForum}>Search</button>
            {(this.state.clicked && this.state.searchInfo.data) && this.state.searchInfo.data.length ?
                <Route path='/' render={routerProps => <ForumContainer {...routerProps} forum={data} />} /> : <h1>{this.state.times}</h1>
            }
            </div>
        )   
    } 
    
}

export default Home;