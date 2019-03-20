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
    searchForum = (query) => {
        console.log(query)
        axios.post('http://localhost:3001/api/searchForum', {params: {title:query}})
         .then(res =>{
            const searchInfo = res.data 
  
            this.setState({ searchInfo });
         })
    };
    componentDidMount() {
        this.searchForum('Thread1');

    }

    handleInputChange = () => {
        this.setState({
          query: this.search.value
        })
        this.searchForum(this.state.query)
      }
      
    render(){
        console.log(this.state.searchInfo)
        return(
            <form>
                <input
                    placeholder="Search for..."
                    ref={input => this.search = input}
                    onChange={this.handleInputChange}
                />
                <p>{this.state.query}</p>
            </form>
        )
    } 
    
}

export default Home;