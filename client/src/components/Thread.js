import React, {Component} from 'react';

class Thread extends Component {
    render(){
        const title = this.props.title
        const posts = this.props.posts
        return(
            <div>
                    <h1>{title}</h1>
                    <div className='forum'>
                    {posts.map((posts, index) => (
                            <div className='post'>
                                {posts}
                            </div>
                    ))}
                    </div>
            </div> 
        )
}}
            

export default Thread;