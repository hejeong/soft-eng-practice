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
<<<<<<< HEAD
        this.setState({
            clicked: true,
            times: this.state.times + 1
        })
        const query = this.state.query
=======
        const query = this.state.query;
        console.log(query)
>>>>>>> 11053a435d612f7bcf4d05c737850d08d7a33199
        axios.get('http://localhost:3001/api/searchForum', {params: {title:query}})
         .then(res =>{
            const searchInfo = res.data 
  
            this.setState({ searchInfo });
         })
<<<<<<< HEAD
         console.log(this.state.searchInfo)
         
    };
=======
         debugger
    };

>>>>>>> 11053a435d612f7bcf4d05c737850d08d7a33199

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
<<<<<<< HEAD
            <button onClick={this.searchForum}>Search</button>
            {(this.state.clicked && this.state.searchInfo.data) && this.state.searchInfo.data.length ?
                <Route path='/' render={routerProps => <ForumContainer {...routerProps} forum={data} />} /> : <h1>{this.state.times}</h1>
            }
=======
            <button onClick={this.searchForum}/>
>>>>>>> 11053a435d612f7bcf4d05c737850d08d7a33199
            </div>
        )   
    } 
    
}

export default Home;