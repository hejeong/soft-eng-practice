import React from 'react';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

const GradeContainer = ({match, grades}) => {
    console.log(grades.data)
    const classes = grades.data
    const userInfo = cookies.get('userInfo');
    /*const display = (grades.data).map( classInfo => (
        classInfo.members.map((member, index) => (
            <div>
            {(member === userInfo.id) ? 
                <div>
                {classInfo.className}
                {classInfo.grades[index]}) </div> :
                <h1>no grades</h1>
            }
            </div>
        ))
    ))*/
       
    return(
    <div className='forum'>
        hi
    </div>
    )
}

export default GradeContainer;