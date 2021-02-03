import React, {useRef, useEffect} from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'
import {isInViewport} from './redux/actionCreators'

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

const MainSection = ({isInViewportReducer}) => {

    const mainSection = useRef(null)

    useEffect(() => {
        isInViewportReducer({mainSectionTop: mainSection.current.getBoundingClientRect().top})
        document.addEventListener('scroll', function () {
            isInViewportReducer({mainSectionTop: mainSection.current.getBoundingClientRect().top})
        });
    }, [])

    return (
        <section ref={mainSection} className='relative w-full h-screen bg-gradient-to-r from-green-400 to-blue-500 flex justify-center items-center'>
            <div>
                <h1 className='font-inter font-bold text-6xl sm:text-7xl text-center text-white'>Francisco Beccaria</h1>
                <p className='font-inter text-lg opacity-70 text-center text-white'>Frontend Developer</p>
            </div>
            <ScrollDown>
                <span className="mouse">
                    <span className="move"></span>
                </span>
                <h2 className='font-inter'>Scroll down</h2>
            </ScrollDown>
        </section>
    )
}

const mapStateToProps = state => (
    {}
)

const mapDispatchToProps = dispatch => ({
    isInViewportReducer(data){
        dispatch(isInViewport(data))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(MainSection)
