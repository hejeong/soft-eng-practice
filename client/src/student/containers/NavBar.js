import React, {useState} from 'react';
import { useSpring, animated } from 'react-spring';
import { NavLink } from 'react-router-dom';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
//import MenuButton from '../components/MenuButton';

function NavBar() {
    const [toggle, set] = useState(true)
    const move = useSpring({
        marginLeft: toggle ? '-15%' : '-2%',
        from: { marginLeft: '-15%'},
    })

    const logout = () => {
        console.log('hi')
        cookies.remove('userId', {path: '/'})
        cookies.remove('userName', {path: '/'});
        cookies.remove('userClasses', {path: '/'});
        cookies.remove('userType', {path: '/'})
        set(state => !state)
    }

    if(!cookies.get('userId')){
        return(
            <animated.div
            className='sideBar'
            onMouseEnter={() => set(state => !state)}
            onMouseLeave={() => set(state => !state)}
            style={move}>
            <NavLink className='navButton' to="/home" exact>Login</NavLink>
            </animated.div>
        )
    }

    return(
        <animated.div
        className='sideBar'
        onMouseEnter={() => set(state => !state)}
        onMouseLeave={() => set(state => !state)}
        style={move}>
        <NavLink className='navButton' to="/home" exact>Home</NavLink>
        <NavLink className='navButton' to="/forum" exact>Forum</NavLink>
        <NavLink className='navButton' to="/quizzes" exact>Quizzes</NavLink> 
        <NavLink className='navButton' to="/grades" exact>Grades</NavLink>
        <NavLink className='navButton logout' to="/" exact onClick={logout}>Log Out</NavLink>
        </animated.div>
    )
}

export default NavBar