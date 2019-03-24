import React, {useState} from 'react';
import { useSpring, animated } from 'react-spring';
import { NavLink } from 'react-router-dom';
//import MenuButton from '../components/MenuButton';

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
        <NavLink className='navButton' to="/" exact>Home</NavLink>
        <NavLink className='navButton' to="/forum" exact>Forum</NavLink>
        <NavLink className='navButton' to="/quizzes" exact>Quizzes</NavLink> 
        <NavLink className='navButton' to="/announcements/view" exact>View Announcements</NavLink> 
        </animated.div>
    )
}

export default NavBar