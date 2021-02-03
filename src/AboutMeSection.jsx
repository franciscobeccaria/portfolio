import React, {useEffect, useRef} from 'react'

import {connect} from 'react-redux'
import {isInViewport} from './redux/actionCreators'

const AboutMeSection = ({isInViewportReducer}) => {

    const aboutMeSection = useRef(null)
    
    useEffect(() => {
        document.addEventListener('scroll', function () {
            isInViewportReducer({aboutMeSectionTop: aboutMeSection.current.getBoundingClientRect().top})
        });
      
    }, [])

    return (
        <section ref={aboutMeSection} className='relative w-full min-h-screen bg-dark flex items-center flex-col pt-16 pb-2 sm:pb-4 xl:pb-10 md:pb-20'>
            <h2 className='font-inter font-bold text-6xl text-center text-white mb-16 px-6 mt-8'>About Me</h2>
            <div className='flex flex-col justify-center items-center md:items-stretch md:grid grid-rows-2 grid-flow-col gap-6 px-4 sm:px-12 w-full lg:w-3/4'>
                <div className='mb-10 md:mb-0 bg-blue-500 row-span-2 flex items-center justify-center flex-col rounded-lg bg-gradient-to-b from-green-400 to-blue-500'>
                    <div className='h-36 w-36 rounded-full m-4'>
                        <img className='rounded-full' src={`https://avatars.githubusercontent.com/u/63370137?s=460&u=206fe38bd4af21190f97a581e52d0a1f7d8d732d&v=4`} alt="Me"/>
                    </div>
                    <div className='m-4'>
                        <p className='font-inter text-white font-bold text-center'>LOCATION:</p>
                        <p className='font-inter text-white text-center'>Buenos Aires, Argentina</p>
                    </div>
                    <div className='m-4'>
                        <p className='font-inter text-white font-bold text-center'>LANGUAGES:</p>
                        <p className='font-inter text-white text-center'>Spanish (Native)</p>
                        <p className='font-inter text-white text-center'>English (Intermediate / B2 Level)</p>
                    </div>
                </div>
                <div className='mb-10 md:mb-0 col-span-2'>
                    <p className='text-white font-inter'>Hi, my name is Francisco Beccaria. I'm 21 years old. I'm currently studying Node.js, Express and MongoDB to specialize me in the MERN stack.
                        <br/><br/> Right now, I'm looking for my first professional job experience. I just want learn and learn. But, I think I'm ready for my first job.
                        <br/><br/> I don't have professional experience but I did many personal projects that prove my skills, mainly for a Frontend (React) job.</p>
                </div>
                <div className='mb-10 md:mb-0 col-span-2'>
                    <h4 className='text-white font-bold text-3xl mb-4'>Skills:</h4>
                    <ul className='text-white font-inter pl-6'>
                        <li>HTML</li>
                        <li>CSS (Sass)</li>
                        <li>JavaScript</li>
                        <li>React (Redux / styled-components)</li>
                        <li>Firebase</li>
                        <li>Figma / Framer</li>
                        <li>Git / GitHub</li>
                    </ul>
                </div>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(AboutMeSection)
