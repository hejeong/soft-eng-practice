import Cookies from 'universal-cookie';
import history from './History'
const cookies = new Cookies();

export function checkLoggedIn(){
    if(!cookies.get('userInfo')){
        console.log(cookies.get('userInfo'))
        history.push('/login')
    }
}

export function logOut(){
    cookies.remove('userInfo', {path: '/'})
}