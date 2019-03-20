import React, {Component} from 'react';
import axios from 'axios'


class Home extends Component{
    constructor(props) {
        super(props)
        this.state = {
              searchInfo: [],
              query: '1'
        };  
    }
    search = (query) => {
        axios.get('http://localhost:3001/api/searchForum')
         .then(res =>{
            const searchInfo = res.data 
  
            this.setState({ searchInfo });
         })
    };
    componentDidMount() {
        this.search("");

    }
    render(){
        console.log(this.state.searchInfo)
        return(
            <div className='centered'>
                dog
           </div>
        )
    } 
    
}

export default Home;