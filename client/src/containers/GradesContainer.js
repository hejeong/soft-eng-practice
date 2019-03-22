import React from 'react';
import GradeBox from './GradeBox'
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
                <GradeBox> {classInfo.className} {classInfo.grades[index]} </GradeBox> : null
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