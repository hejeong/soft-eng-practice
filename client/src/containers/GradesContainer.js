import React from 'react';
import GradeBox from './GradeBox'
import Cookies from 'universal-cookie';
import { memo, useState } from 'react'
import { useSpring, animated } from 'react-spring'
import { useMeasure, usePrevious } from '../components/tree list/helpers'
import { Global, Frame, Content, toggle } from '../assets/styles'
import * as Icons from '../assets/icons'
const cookies = new Cookies();

const Tree = memo(({ children, name, style, open = false }) => {
    const [isOpen, setOpen] = useState(open)
    const previous = usePrevious(isOpen)
    const [bind, { height: viewHeight }] = useMeasure()
    const { height, opacity, transform } = useSpring({
      from: { height: 0, opacity: 0, transform: 'translate3d(20px,0,0)' },
      to: { height: isOpen ? viewHeight : 0, opacity: isOpen ? 1 : 0, transform: `translate3d(${isOpen ? 0 : 20}px,0,0)` }
    })
    const Icon = Icons[`${children ? (isOpen ? 'Minus' : 'Plus') : 'Close'}SquareO`]
    return (
      <Frame>
        <Icon style={{ ...toggle, opacity: children ? 1 : 0.3 }} onClick={() => setOpen(!isOpen)} />
        <span style={{ verticalAlign: 'middle', ...style }}>{name}</span>
        <Content style={{ opacity, height: isOpen && previous === isOpen ? 'auto' : height, }}>
          <animated.div style={{ transform }} {...bind}>
            {children}
          </animated.div>
        </Content>
      </Frame>
    )
  })

const GradeContainer = ({match, grades}) => {
    const classes = grades.data
    const userInfo = cookies.get('userInfo');
    const display = (classes).map( classInfo => (
        <div>
        {(classInfo.members).map((member, index) => (
            <div>
            {(member === userInfo.id) ? 
                <GradeBox name={classInfo.className} grades={classInfo.grades[index]} assignments={classInfo.assignments}/> : null
            }
            </div>
        ))}
        </div>
    ))
       
    return(
    <div className='gradebook'>
    <div style={{marginLeft:'10px'}}>
    <>
    <Global/>
    <Tree name="Classes" style={{ color: 'black' }} open>
        {(classes).map( classInfo => (
            <Tree name={classInfo.className} style={{ color: 'black' }}>
            {(classInfo.members).map((member, index) => (
                <div>
                    {(member === userInfo.id) ? 
                        <GradeBox grades={classInfo.grades[index]} assignments={classInfo.assignments}/> : null
                    }
                </div>
            ))}
            </Tree>
        ))}
    </Tree>
    </>
    </div>
    </div>

    /*<div className='forum'>
        {console.log(display)}
        {display}
    </div>*/
    )
}

export default GradeContainer;