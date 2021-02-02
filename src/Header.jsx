import React from 'react'
import {connect} from 'react-redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import {faBars} from '@fortawesome/free-solid-svg-icons'

const Header = ({scrollDownIsInViewport, aboutMeIsInViewport}) => {
    console.log('MainIsInViewport?', scrollDownIsInViewport ? 'Si' : 'No')
    if(scrollDownIsInViewport === true || scrollDownIsInViewport === undefined || aboutMeIsInViewport === false) {
        return (
            <header className="w-full h-16 fixed top-0 left-0 flex justify-between px-4 z-10">
                <div className='w-20 h-full flex items-center justify-center'>
                    <FontAwesomeIcon icon={faBars} size='lg' className='transition duration-500 ease-in-out text-white hover:opacity-75 m-4 cursor-pointer transform hover:-translate-y-1 hover:scale-110'/>
                </div>
                <div className='h-full flex items-center justify-center'>
                    <FontAwesomeIcon icon={faGithub} size='lg' className='transition duration-500 ease-in-out text-white hover:opacity-75 m-4 cursor-pointer transform hover:-translate-y-1 hover:scale-110'/>
                    <FontAwesomeIcon icon={faTwitter} size='lg' className='transition duration-500 ease-in-out text-white hover:opacity-75 m-4 cursor-pointer transform hover:-translate-y-1 hover:scale-110'/>
                    <FontAwesomeIcon icon={faLinkedinIn} size='lg' className='transition duration-500 ease-in-out text-white hover:opacity-75 m-4 cursor-pointer transform hover:-translate-y-1 hover:scale-110'/>
                </div>
            </header>
        )
    } else {
        return (
            <header className="w-full h-16 fixed top-0 left-0 flex justify-between px-4 z-10">
                <div className='w-20 h-full flex items-center justify-center'>
                    <FontAwesomeIcon icon={faBars} size='lg' className='transition duration-500 ease-in-out text-black hover:opacity-75 m-4 cursor-pointer transform hover:-translate-y-1 hover:scale-110'/>
                </div>
                <div className='h-full flex items-center justify-center'>
                    <FontAwesomeIcon icon={faGithub} size='lg' className='transition duration-500 ease-in-out text-black hover:opacity-75 m-4 cursor-pointer transform hover:-translate-y-1 hover:scale-110'/>
                    <FontAwesomeIcon icon={faTwitter} size='lg' className='transition duration-500 ease-in-out text-black hover:opacity-75 m-4 cursor-pointer transform hover:-translate-y-1 hover:scale-110'/>
                    <FontAwesomeIcon icon={faLinkedinIn} size='lg' className='transition duration-500 ease-in-out text-black hover:opacity-75 m-4 cursor-pointer transform hover:-translate-y-1 hover:scale-110'/>
                </div>
            </header>
        )
    }
    
}

const mapStateToProps = state => (
    {
        scrollDownIsInViewport: state.scrollDownIsInViewport
    }
)

const mapDispatchToProps = () => {}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
