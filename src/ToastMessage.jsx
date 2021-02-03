import React, {useRef, useEffect} from 'react'
import styled from 'styled-components'
import { toastMessage } from './redux/actionCreators';
import {connect} from 'react-redux'

const Wrapper = styled.div`
    visibility: hidden;
    min-width: 250px;
    max-width: 80vw;
    //background-color: #333;
    color: #fff;
    text-align: center;
    padding: 16px;
    position: fixed;
    z-index: 1000;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    bottom: 30px;
    font-size: 1.5rem;
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);

    &.animation {
        visibility: visible;
        -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
        animation: fadein 0.5s, fadeout 0.5s 2.5s; }
        @-webkit-keyframes fadein {
        from {
            bottom: 0;
            opacity: 0; }
        to {
            bottom: 30px;
            opacity: 1; } }

        @keyframes fadein {
        from {
            bottom: 0;
            opacity: 0; }
        to {
            bottom: 30px;
            opacity: 1; } }

        @-webkit-keyframes fadeout {
        from {
            bottom: 30px;
            opacity: 1; }
        to {
            bottom: 0;
            opacity: 0; } }

        @keyframes fadeout {
        from {
            bottom: 30px;
            opacity: 1; }
        to {
            bottom: 0;
            opacity: 0; }
    }
`

const ToastMessage = ({receivedState, toastMessageReducer}) => {

    const toastMessageWrapper = useRef(null)

    useEffect(() => {
        console.log(receivedState)
        if(receivedState.toastMessageVisibility === true) {
            showToastMessage()
        }
    }, [receivedState.toastMessageVisibility])

    const showToastMessage = () => {
        toastMessageWrapper.current.innerHTML = receivedState.toastMessageText
        toastMessageWrapper.current.classList.add('animation')
        setTimeout(function () {
            toastMessageWrapper.current.innerHTML = ''
            toastMessageWrapper.current.classList.remove('animation')
            toastMessageReducer({visibility: false, text: undefined})
        }, 3000);
}

    return (
        <Wrapper ref={toastMessageWrapper} className='bg-blue-900 rounded-2xl font-bold font-inter'></Wrapper>
    )
}


const mapStateToProps = state => (
    {
        receivedState: state
    }
)

const mapDispatchToProps = dispatch => ({
    toastMessageReducer(data){
        dispatch(toastMessage(data))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ToastMessage)
