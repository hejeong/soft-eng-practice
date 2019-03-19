import React, {Component} from 'react';

class Thread extends Component{
    render(){
        const title = this.props.title
        const posts = this.props.posts
        return(
            <React.fragment>
                    {posts.map((post, index) => (
                        <div>
                            <h1>{title}</h1>
                            <div className='post'>
                                {post}
                            </div>
                        </div>
                    ))}
            </React.fragment> 
        )
    }
            
}

export default Thread;