import React, {useState} from 'react';
import { useSpring, animated } from 'react-spring';
import NewThread from './NewThread'

function NewThreadBar() {
    const [toggle, set] = useState(true)
    const move = useSpring({
        marginLeft: toggle ? '100%' : '60%',
        from: { marginLeft: '100%'},
    })
    
    
    return(
        <>
        <animated.div
            className='postTag'
            style={move}>
                <button onClick={() => set(state => !state)} style={{float:'left', width:'100%', 'textAlign': 'left', height:'100%',}}>
                    New Post
                </button></animated.div>
        <animated.div
        className='newPost'
        style={move}>
            <NewThread/>
        </animated.div>
        </>
    )
}

export default NewThreadBar