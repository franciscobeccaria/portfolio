import React, {useRef, useEffect, useState} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {isInViewport} from './redux/actionCreators'

import ProjectCard from './ProjectCard'

const ProjectsSection = ({isInViewportReducer}) => {

    const projectsSection = useRef(null)

    const [state, setState] = useState([])
    
    useEffect(() => {
        isInViewportReducer({projectsSectionTop: projectsSection.current.getBoundingClientRect().top})
        document.addEventListener('scroll', function () {
            isInViewportReducer({projectsSectionTop: projectsSection.current.getBoundingClientRect().top})
        });
        axios.get('https://my-json-server.typicode.com/franciscobeccaria/portfolio-api/projects')
        .then(resp => setState(resp.data))
    }, [])

    return (
        <section ref={projectsSection} className='relative w-full min-h-screen bg-white flex justify-around items-center flex-col pt-16 pb-2 sm:pb-4 xl:pb-10'>
            <h2 className='font-inter font-bold text-6xl text-center text-black mb-16 px-6 mt-8'>Some projects</h2>
            <div className='flex items-center justify-center flex-wrap sm:px-12'>
                {state.map(e => 
                        e.name === 'MovieSearcher' ? '' : 
                        <ProjectCard 
                            key={e.name}
                            title={e.name}
                            image={e.image}
                            website={e.url}
                            repo={e.repo}
                            stack={e.stack}
                            description={e.description}
                            technique={e.technique}
                        />
                    )}
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
