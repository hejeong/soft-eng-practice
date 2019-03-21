import React, {Component} from 'react';
import axios from 'axios'
import {Route} from 'react-router-dom';
import ForumContainer from '../../containers/ForumContainer';
import history from '../../History'

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
            {(this.state.clicked && this.state.searchInfo.data) && this.state.searchInfo.data.length ?
                <Route path='/forum' render={routerProps => <ForumContainer {...routerProps} forum={data} />} /> : <h1>hi</h1>
            }
            <button onClick={this.searchForum}>Search</button>
            </div>
        )   
    } 
    
}

export default SearchBar;