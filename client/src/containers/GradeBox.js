import React, { Component } from 'react';

class GradeBox extends Component{
    constructor(props){
        super(props)
        this.state = {
            className: this.props.name,
            classGrade: this.props.grade
        }
    }
    render(){
        return(
            <div className='gradebox'>
            <div className='grade left'>
                {this.state.className}
            </div>
            <div className='grade right'>
                {this.state.classGrade}
            </div>
            </div>
            )
    }
}

export default GradeBox;