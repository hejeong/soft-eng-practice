import React, {useState} from 'react';
import { useSpring, animated } from 'react-spring';
import MenuButton from '../components/MenuButton'

function NavBar() {
    const [toggle, set] = useState(true)
    const move = useSpring({
        marginLeft: toggle ? -320 : -20,
        opacity: toggle ? 1 : 1,
        from: { marginLeft: -320, opacity: 0},
    })
    
    return(
        <animated.div
        className='sideBar'
        onMouseEnter={() => set(state => !state)}
        onMouseLeave={() => set(state => !state)}
        style={move}>
            <MenuButton className='button'>
                bitch
            </MenuButton>
        </animated.div>
    )
}

export default NavBar