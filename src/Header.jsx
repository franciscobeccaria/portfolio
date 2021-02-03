import React, {useEffect, useRef, useState} from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import {faBars, faTimes} from '@fortawesome/free-solid-svg-icons'

const MenuWrapper = styled.div`
    opacity: 0;
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: black;
    top:0;
    left:0;
    z-index: -20;
    transition: opacity 1s ease-in-out, z-index 1s;
    & .menu {
        transform: translateX(-100%);
        transition: transform 1s;
        width: 40%;
        height: 100%;
        background-color: white;
        @media screen and (max-width: 640px) {
            width: 80%;
        }
    }
    &.show {
        opacity: 1;
        background-color:rgba(0, 0, 0, 0.75);
        z-index: 20;
        transition: opacity 1s ease-in-out;
        & .menu {
            transform: translateX(0%);
            transition: transform 1s;
        }
    }
`

const Header = ({receivedState}) => {

    let headerWhite = useRef(undefined)
    let headerInMain = useRef(true)
    const menuWrapper = useRef(null)

    let whereAreWe = useRef('main')

    const [menuState, setMenuState] = useState({
        show: false,
    })

    useEffect(() => {
        if(receivedState.contactSectionTop <= 25) {
            // We are in Contact Section
            whereAreWe.current = 'contact'
            headerWhite.current = false
            headerInMain.current = false
        } else if (receivedState.aboutMeSectionTop <= 25) {
            // We are in About Me Section
            whereAreWe.current = 'about'
            headerWhite.current = true
            headerInMain.current = false
        } else if (receivedState.projectsSectionTop <= 25){
            // We are in Projects Section
            whereAreWe.current = 'projects'
            headerWhite.current = false
            headerInMain.current = false
        } else if (receivedState.mainSectionTop <= 25) {
            // We are in Main Section
            whereAreWe.current = 'main'
            headerWhite.current = true
            headerInMain.current = true
        } else {
            // We don't know where we are. 
            headerWhite.current = true
            headerInMain.current = true
        }
    }, [receivedState])
    
    useEffect(() => {
        if(menuState.show === true) {
            menuWrapper.current.classList.add('show')
        } else {
            menuWrapper.current.classList.remove('show')
        }
    }, [menuState])

    const openMenu = () => {
        setMenuState({
            show: true,
        })
    }

    const closeMenu = () => {
        setMenuState({
            show: false,
        })
    }

    const goToSection = (whereAreWe) => {
        if (whereAreWe === 'main') {
            // Going to Main Section
            window.scrollBy({
                top: receivedState.mainSectionTop, 
                left: 0, 
                behavior: 'smooth'
              });
        }
        if (whereAreWe === 'projects') {
            // Going to Projects Section
            window.scrollBy({
                top: receivedState.projectsSectionTop, 
                left: 0, 
                behavior: 'smooth'
              });
        }
        if (whereAreWe === 'about') {
            // Going to About Me Section
            window.scrollBy({
                top: receivedState.aboutMeSectionTop, 
                left: 0, 
                behavior: 'smooth'
              });
        }
        if (whereAreWe === 'contact') {
            // Going to Contact Section
            window.scrollBy({
                top: receivedState.contactSectionTop, 
                left: 0, 
                behavior: 'smooth'
              });
        }
    }
    
    const iconWhite = 'transition duration-500 ease-in-out text-black sm:text-white hover:opacity-75 m-4 cursor-pointer transform hover:-translate-y-1 hover:scale-110'
    const iconBlack = 'transition duration-500 ease-in-out text-black sm:text-black hover:opacity-75 m-4 cursor-pointer transform hover:-translate-y-1 hover:scale-110'
    const forceIconWhite = 'transition duration-500 ease-in-out text-white hover:opacity-75 m-4 cursor-pointer transform hover:-translate-y-1 hover:scale-110'

    const headerLeftOutMain = 'w-20 h-16 fixed top-0 left-0 px-4 z-10 flex items-center justify-center bg-gray-50 rounded-br-xl sm:bg-transparent'
    const headerLeftInMain = 'w-20 h-16 fixed top-0 left-0 px-4 z-10 flex items-center justify-center bg-transparent'
    const headerRightOutMain = 'h-16 fixed top-0 right-0 px-4 z-10 flex items-center justify-center bg-gray-50 rounded-bl-xl sm:bg-transparent'
    const headerRightInMain = 'h-16 fixed top-0 right-0 px-4 z-10 flex items-center justify-center bg-transparent'

    return (
        <>
            <div className={headerInMain.current === true ? headerLeftInMain : headerLeftOutMain}>
                <FontAwesomeIcon icon={faBars} size='lg' onClick={() => openMenu()} className={headerInMain.current === true ? forceIconWhite : headerWhite.current === true ? iconWhite : headerWhite.current === undefined ? iconWhite : iconBlack}/>
            </div>
            <div className={headerInMain.current === true ? headerRightInMain : headerRightOutMain}>
                <a href="https://github.com/franciscobeccaria" target="_blank" rel="noreferrer" title='GitHub'>
                    <FontAwesomeIcon icon={faGithub} size='lg' className={headerInMain.current === true ? forceIconWhite : headerWhite.current === true ? iconWhite : headerWhite.current === undefined ? iconWhite : iconBlack}/>
                </a>
                <a href="https://twitter.com/Fran_dev_" target="_blank" rel="noreferrer" title='Twitter'>
                    <FontAwesomeIcon icon={faTwitter} size='lg' className={headerInMain.current === true ? forceIconWhite : headerWhite.current === true ? iconWhite : headerWhite.current === undefined ? iconWhite : iconBlack}/>
                </a>
                <a href="https://www.linkedin.com/in/francisco-b-5119b3114/" target="_blank" rel="noreferrer" title='LinkedIn'>
                    <FontAwesomeIcon icon={faLinkedinIn} size='lg' className={headerInMain.current === true ? forceIconWhite : headerWhite.current === true ? iconWhite : headerWhite.current === undefined ? iconWhite : iconBlack}/>
                </a>
                
            </div>  
            
            <MenuWrapper onClick={() => closeMenu()} ref={menuWrapper}>
                <div onClick={e => e.stopPropagation()} className='menu relative flex items-center justify-center'>
                    <div className='w-20 h-20 absolute top-0 left-0 flex items-center justify-center'>
                        <FontAwesomeIcon icon={faTimes} size='lg' onClick={() => closeMenu()} className={iconBlack}/>
                    </div>
                    <ul className='text-center text-4xl font-inter font-bold'>
                        <li className={whereAreWe.current === 'main' 
                                            ? 'm-6 cursor-pointer text-blue-500 hover:text-black transition duration-500 ease-in-out'
                                            : 'm-6 cursor-pointer text-black hover:text-blue-500 transition duration-500 ease-in-out'
                                        }
                            onClick={() => {goToSection('main'); closeMenu()}}
                            >
                            Home
                        </li>
                        <li className={whereAreWe.current === 'projects' 
                                            ? 'm-6 cursor-pointer text-blue-500 hover:text-black transition duration-500 ease-in-out'
                                            : 'm-6 cursor-pointer text-black hover:text-blue-500 transition duration-500 ease-in-out'
                                        }
                            onClick={() => {goToSection('projects'); closeMenu()}}
                            >
                            Projects
                        </li>
                        <li className={whereAreWe.current === 'about' 
                                            ? 'm-6 cursor-pointer text-blue-500 hover:text-black transition duration-500 ease-in-out'
                                            : 'm-6 cursor-pointer text-black hover:text-blue-500 transition duration-500 ease-in-out'
                                        }
                            onClick={() => {goToSection('about'); closeMenu()}}
                            >
                            About Me
                        </li>
                        <li className={whereAreWe.current === 'contact' 
                                            ? 'm-6 cursor-pointer text-blue-500 hover:text-black transition duration-500 ease-in-out'
                                            : 'm-6 cursor-pointer text-black hover:text-blue-500 transition duration-500 ease-in-out'
                                        }
                            onClick={() => {goToSection('contact'); closeMenu()}}
                            >
                            Contact
                        </li>
                    </ul>
                </div>
            </MenuWrapper>
        </>
    )    
}

const mapStateToProps = state => (
    {
        receivedState: state
    }
)

const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
