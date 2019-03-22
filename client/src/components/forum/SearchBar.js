import React, {Component} from 'react';
import axios from 'axios'
import Cookies from 'universal-cookie';
import history from '../../History'
import { Link } from 'react-router-dom';
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
        const query = this.state.query
        axios.get('http://localhost:3001/api/searchForum', {params: {title:query}})
         .then(res =>{
            const searchInfo = res.data 
            cookies.set('searchInfo', searchInfo, { path: '/forum' });
            this.setState({
                searchInfo:searchInfo
            })
         })

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
            <Link to="/forum" exact> <button onClick={this.searchForum}>Search</button></Link>
            </div>
        )   
    } 
    
}

export default SearchBar;