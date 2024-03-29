import React, {useEffect, useRef} from 'react'
import styled from 'styled-components'

import { projectModal } from './redux/actionCreators';
import {connect} from 'react-redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJs, faReact, faSass } from '@fortawesome/free-brands-svg-icons'
import {faTimes} from '@fortawesome/free-solid-svg-icons'

import { IconContext } from "react-icons";
import {SiRedux, SiFirebase,  SiTailwindcss} from 'react-icons/si'

const ModalWrapper = styled.div`
    opacity: 0;
    // new
    position: absolute;
    top:-500px;
    left: 0;
    // new
    //position: fixed;
    //width: 100vw;
    //height: 100vh;
    background-color: white;
    //top:0;
    //left:0;
    z-index: -20;
    transition: opacity 1s ease-in-out, z-index 1s;
    overflow: auto;
    &.show {
        // new
        top: 0;
        // new
        opacity: 1;
        background-color: white;
        z-index: 20;
        transition: opacity .1s;
    }
`

const ProjectModal = ({receivedState, projectModalReducer}) => {

    const projectModalWrapper = useRef(null)

    useEffect(() => {
        console.log(receivedState)
        if(receivedState.projectModalVisibility === true) {
            //showToastMessage()
            console.log('show modal')
            projectModalWrapper.current.classList.add('show')
            console.log(receivedState.projectModalData)
        } else {
            console.log('close modal')
            projectModalWrapper.current.classList.remove('show')
            console.log(receivedState.projectModalData)
        }
    }, [receivedState.projectModalVisibility])

    return (
        <ModalWrapper ref={projectModalWrapper} className='flex items-center flex-col pt-10 sm:pt-0'>
            <div className='w-20 h-20 absolute top-0 left-0 flex items-center justify-center'>
                <FontAwesomeIcon icon={faTimes} size='lg' onClick={() => projectModalReducer({visibility: false, data: {title: '', image: '', website: '', repo: '', stack: undefined, description: '', technique: ''}})} className='transition duration-500 ease-in-out text-black sm:text-black hover:opacity-75 m-4 cursor-pointer transform hover:-translate-y-1 hover:scale-110'/>
            </div>
            <h2 className='font-inter font-bold text-5xl sm:text-6xl text-center text-black mb-16 px-6 mt-8'>{receivedState.projectModalData.title}</h2>
            <div className='flex items-center justify-center p-4 w-11/12 lg:w-9/12 flex-wrap'>
                <ul className='mb-4 md:mb-0 md:h-full w-full md:w-1/3 flex items-center justify-center flex-col'>
                {receivedState.projectModalData.stack === undefined ? '' : receivedState.projectModalData.stack.map(e => 
                    <li className='font-inter w-60 w-md:11/12 mb-2 flex'>
                        <div className='flex items-center justify-center w-8 mr-2'>
                            {e === 'JavaScript (Vanilla)' ? <FontAwesomeIcon icon={faJs} size='lg' /> : ''}
                            {e === 'CSS (Sass)' ? <FontAwesomeIcon icon={faSass} size='lg' /> : ''}
                            {e === 'React' ? <FontAwesomeIcon icon={faReact} size='lg' /> : ''}
                            {e === 'Redux' ?
                                <IconContext.Provider value={{ color: "black", size: "18px" }}>
                                    <SiRedux />
                                </IconContext.Provider>
                            : ''}
                            {e === 'Firebase' ? 
                                <IconContext.Provider value={{ color: "black", size: "18px" }}>
                                    <SiFirebase />
                                </IconContext.Provider>
                            : ''
                            }
                            {e === 'TailwindCSS' ? 
                                <IconContext.Provider value={{ color: "black", size: "18px" }}>
                                    <SiTailwindcss />
                                </IconContext.Provider>
                            : ''
                            }
                        </div>
                        {e}
                    </li>
                )}
                </ul>
                
                <div className='mb-4 md:mb-0 md:h-full w-full md:w-1/3 flex items-center justify-center'>
                    {receivedState.projectModalData.website === '#'
                        ?
                            <a className='w-2/3 md:w-36' href={receivedState.projectModalData.website} rel="noreferrer"><button className='w-full rounded-xl text-white font-inter font-bold p-3 bg-blue-600 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 transition-all duration-500'>Visit site</button></a>
                        :
                            <a className='w-2/3 md:w-36' href={receivedState.projectModalData.website} target="_blank" rel="noreferrer"><button className='w-full rounded-xl text-white font-inter font-bold p-3 bg-blue-600 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 transition-all duration-500'>Visit site</button></a>
                    }
                </div>
                <div className='mb-4 md:mb-0 md:h-full w-full md:w-1/3 flex items-center justify-center'>
                    <a className='w-2/3 md:w-36' href={receivedState.projectModalData.repo} target="_blank" rel="noreferrer"><button className='w-full rounded-xl text-white font-inter font-bold p-3 bg-blue-600 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 transition-all duration-500'>See Repository</button></a>
                </div>
            </div>
            <div className='w-11/12 lg:w-9/12 flex items-center justify-center flex-wrap'>
                <div className='w-full sm:w-1/2 flex-items-center justify-center p-4'>
                    <h4 className='font-inter font-bold text-lg pl-4 mb-2'>General Description:</h4>
                    <p className='font-inter text-sm'>{receivedState.projectModalData.description}</p>
                </div>
                <div className='w-full sm:w-1/2 flex-items-center justify-center p-4'>
                    <h4 className='font-inter font-bold text-lg pl-4 mb-2'>Tech Description:</h4>
                    <p className='font-inter text-sm'>{receivedState.projectModalData.technique}</p>
                </div>
            </div>
            <div className='w-11/12 lg:w-9/12 flex items-center justify-center p-6'>
                <img src={receivedState.projectModalData.image} alt={receivedState.projectModalData.title}/>
            </div>
        </ModalWrapper>
    )
}

const mapStateToProps = state => (
    {
        receivedState: state
    }
)

const mapDispatchToProps = dispatch => ({
    projectModalReducer(data){
        dispatch(projectModal(data))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ProjectModal)
