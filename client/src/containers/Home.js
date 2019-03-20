import React, {Component} from 'react';
import axios from 'axios'


class Home extends Component{
    constructor(props) {
        super(props)
        this.state = {
              searchInfo: [],
              query: ""
        };  
    }
    searchForum = (event) => {
        const query = this.state.query;
        console.log(query)
        axios.get('http://localhost:3001/api/searchForum', {params: {title:query}})
         .then(res =>{
            const searchInfo = res.data 
  
            this.setState({ searchInfo });
         })
         debugger
    };


    handleInputChange = () => {
        this.setState({
          query: this.search.value
        })
        //this.searchForum(this.state.query)
      }
      
    render(){
        console.log(this.state.searchInfo)
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
            <button onClick={this.searchForum}/>
            </div>
        )   
    } 
    
}

export default Home;