import React, {Component} from 'react';
import axios from 'axios'
import {Route} from 'react-router-dom';
import ForumContainer from '../../containers/ForumContainer';
import history from '../../History'
import Cookies from 'universal-cookie';
const cookies = new Cookies();

class SearchBar extends Component{
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
            clicked: true
        })
    };

    componentWillUnmount = () => {
        const query = this.state.query
        axios.get('http://localhost:3001/api/searchForum', {params: {title:query}})
         .then(res =>{
            const searchInfo = res.data 
            cookies.set('searchInfo', searchInfo, { path: '/forum' });
            this.setState({ searchInfo });
         })
         
         history.push('/forum')
    };

    handleInputChange = () => {
        this.setState({
          query: this.search.value,
        })
      }
      
    render(){
        const data = this.state.searchInfo.data
        console.log(data)
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
            </div>
        )   
    } 
    
}

export default SearchBar;