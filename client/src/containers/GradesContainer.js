import React from 'react';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

const GradeContainer = ({match, grades}) => {
    const classes = grades.data
    const userInfo = cookies.get('userInfo');
    const display = (classes).map( classInfo => (
        <div>
        {(classInfo.members).map((member, index) => (
            <div>
            {(member === userInfo.id) ? 
                <h1> {classInfo.className} {classInfo.grades[index]} </h1> : null
            }
            </div>
        ))}
        </div>
    ))
       
    return(
    <div className='forum'>
        {console.log(display)}
        {display}
    </div>
    )
}

export default GradeContainer;