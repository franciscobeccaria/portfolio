import React, {useRef, useEffect} from 'react'
import {connect} from 'react-redux'
import {isInViewport} from './redux/actionCreators'

import ProjectCard from './ProjectCard'

const ProjectsSection = ({isInViewportReducer}) => {

    const projectsSection = useRef(null)
    
    useEffect(() => {
        document.addEventListener('scroll', function () {
            isInViewportReducer({projectsSectionTop: projectsSection.current.getBoundingClientRect().top})
        });
      
    }, [])

    

    return (
        <section ref={projectsSection} className='relative w-full min-h-screen bg-white flex justify-around items-center flex-col pt-16 pb-2 sm:pb-4 xl:pb-10'>
            <h2 className='font-inter font-bold text-6xl text-center text-black mb-16 px-6 mt-8'>Some projects</h2>
            <div className='flex items-center justify-center flex-wrap sm:px-12'>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsSection)
