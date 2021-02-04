import React, {useEffect, useRef} from 'react'
import styled from 'styled-components'

import {connect} from 'react-redux'

const Wrapper = styled.div`
    opacity: 0;
    z-index: -20;
    transition: opacity 1s ease-in-out, z-index 1s;
    overflow: auto;
    display: none;
    &.show {
        display: block;
        opacity: 1;
        z-index: 20;
        transition: opacity .1s;
    }
`

const AppProvider = ({children, receivedState}) => {

    const wrapper = useRef(null)

    useEffect(() => {
        console.log(receivedState)
        if(receivedState.projectModalVisibility === true) {
            //showToastMessage()
            console.log('show modal')
            wrapper.current.classList.remove('show')
            console.log(receivedState.projectModalData)
        } else {
            console.log('close modal')
            wrapper.current.classList.add('show')
            console.log(receivedState.projectModalData)
        }
    }, [receivedState.projectModalVisibility])

    return (
        <Wrapper ref={wrapper} className='show'>
            {children}
        </Wrapper>
    )
}

const mapStateToProps = state => (
    {
        receivedState: state
    }
)

const mapDispatchToProps = dispatch => ({
    
})

export default connect(mapStateToProps, mapDispatchToProps)(AppProvider)
