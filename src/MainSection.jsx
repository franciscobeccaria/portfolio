import React, {useRef, useEffect} from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'
import {addToCart} from './redux/actionCreators'

const ScrollDown = styled.div`
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translate(-50%,-50%);

& h2 {
  color: #fff;
  font-size: 12px;
  margin-top: 5px;
}

& .mouse {
  margin: 0 auto;
  display: block;
  border-radius: 50px;
  border: 2px solid #fff;
  height: 50px;
  width: 25px;
  position: relative;
}

& .move {
  position: absolute;
  background-color: #fff;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  left: 50%;
  transform: translateX(-50%);
  animation: move 2s linear infinite;
}

@keyframes move {
  0% {
    transform: translate(-50%,5px);
    opacity: 0;
  }
  50% {
    transform: translate(-50%,10px);
    opacity: 1;
  }
  100% {
    transform: translate(-50%,20px);
    opacity: 0;
  }
}
`

const MainSection = ({addCourseToCart}) => {

    const scrollDown = useRef(null)

    function isInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    
        );
    }

    useEffect(() => {
        document.addEventListener('scroll', function () {
            //console.log(isInViewport(scrollDown.current))
            // quiero que cuando scrollDown se deje de mostrar se pinten de negro los iconos del Hedaer. 
            // en store va a ser, scrollDownIsInViewport: true/false. initialStore tiene que estar vacio o undefined.
            addCourseToCart(isInViewport(scrollDown.current)) 
        });
      
    }, [])

    return (
        <section className='relative w-full h-screen bg-gradient-to-r from-green-400 to-blue-500 flex justify-center items-center'>
            <div>
                <h1 className='font-inter font-bold text-7xl text-center text-white'>Francisco Beccaria</h1>
                <p className='font-inter text-lg opacity-70 text-center text-white'>Frontend Developer</p>
            </div>
            <ScrollDown>
                <span className="mouse">
                    <span className="move"></span>
                </span>
                <h2 className='font-inter'>Scroll down</h2>
            </ScrollDown>
            <div ref={scrollDown} className='z-neg w-full bg-red-600 absolute self-end my-2.5 h-2.5'></div>
        </section>
    )
}

const mapStateToProps = state => (
    {}
)

const mapDispatchToProps = dispatch => ({
    addCourseToCart(id){
        dispatch(addToCart(id))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(MainSection)
