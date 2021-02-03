import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import {faFile} from '@fortawesome/free-regular-svg-icons'

const Footer = () => {
    return (
        <footer className='w-full h-40 bg-gray-800 flex items-center justify-center flex-col'>
            <p className='font-inter text-white text-center px-4'>Francisco Beccaria © 2021 - Todos los derechos reservados</p>
            <div className='flex items-center justify-center'>
            <a href="https://github.com/franciscobeccaria" target="_blank" rel="noreferrer" title='GitHub'>
                    <FontAwesomeIcon icon={faGithub} size='lg' className='transition duration-500 ease-in-out text-white hover:opacity-75 m-4 cursor-pointer transform hover:-translate-y-1 hover:scale-110'/>
                </a>
                <a href="https://twitter.com/Fran_dev_" target="_blank" rel="noreferrer" title='Twitter'>
                    <FontAwesomeIcon icon={faTwitter} size='lg' className='transition duration-500 ease-in-out text-white hover:opacity-75 m-4 cursor-pointer transform hover:-translate-y-1 hover:scale-110'/>
                </a>
                <a href="https://www.linkedin.com/in/francisco-b-5119b3114/" target="_blank" rel="noreferrer" title='LinkedIn'>
                    <FontAwesomeIcon icon={faLinkedinIn} size='lg' className='transition duration-500 ease-in-out text-white hover:opacity-75 m-4 cursor-pointer transform hover:-translate-y-1 hover:scale-110'/>
                </a>
                <a href="#" title='Resume'><FontAwesomeIcon icon={faFile} size='lg' className='transition duration-500 ease-in-out text-white hover:opacity-75 m-4 cursor-pointer transform hover:-translate-y-1 hover:scale-110'/></a>
            </div>
            </footer>
    )
}

export default Footer
