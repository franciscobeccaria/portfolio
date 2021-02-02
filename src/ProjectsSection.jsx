import React, {useRef, useEffect} from 'react'
import {connect} from 'react-redux'
import {addToCart} from './redux/actionCreators'

import ProjectCard from './ProjectCard'

const ProjectsSection = ({addCourseToCart}) => {

    const projectsSecionView = useRef(null)

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
            //console.log(isInViewport(box.current)) 
            addCourseToCart(!isInViewport(projectsSecionView.current)) 
        });
      
    }, [])

    

    return (
        <section className='relative w-full min-h-screen bg-white flex justify-around items-center flex-col pt-16 pb-2 sm:pb-4 xl:pb-10'>
            <h2 className='font-inter font-bold text-6xl text-center text-black mb-16 px-6 mt-8'>Some projects</h2>
            <div className='flex items-center justify-center flex-wrap sm:px-12'>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
            </div>
            <div ref={projectsSecionView} className='z-neg w-full bg-red-600 absolute left-0 bottom-0 my-2.5 h-2.5'></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsSection)
