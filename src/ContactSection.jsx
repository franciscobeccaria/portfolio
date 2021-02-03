import React, {useEffect, useRef} from 'react'
import axios from 'axios'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser, faEnvelope} from '@fortawesome/free-regular-svg-icons'

import {connect} from 'react-redux'
import {isInViewport} from './redux/actionCreators'

import Input from './Input'

const ContactSection = ({isInViewportReducer}) => {

    const contactSection = useRef(null)
    
    useEffect(() => {
        document.addEventListener('scroll', function () {
            isInViewportReducer({contactSectionTop: contactSection.current.getBoundingClientRect().top})
        });
    }, [])

    const submitForm = (ev) => {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
          if (xhr.readyState !== XMLHttpRequest.DONE) return;
          if (xhr.status === 200) {
            form.reset();
            //this.setState({ status: "SUCCESS" });
          } else {
            //this.setState({ status: "ERROR" });
          }
        };
        xhr.send(data);
      }

    return (
        <section ref={contactSection} className='relative w-full min-h-screen bg-gray-300 flex items-center flex-col pt-16 pb-2 sm:pb-4 xl:pb-10'>
            <h2 className='font-inter font-bold text-6xl text-center text-gray-700 mb-16 px-6 mt-8'>Contact</h2>
            <form onSubmit={(e) => submitForm(e)} action="https://formspree.io/f/xbjpbdzv" method="POST" className='mb-16 lg:w-130'>
                <Input 
                    id='name'
                    label='Name'
                    placeholder='Insert your name here.'
                    inputType='text'
                    icon={<FontAwesomeIcon icon={faUser} size='md' className=''/>}
                />
                <Input 
                    id='email'
                    label='Email'
                    placeholder='Insert your email here.'
                    inputType='email'
                    icon={<FontAwesomeIcon icon={faEnvelope} size='md' className=''/>}
                />
                <Input
                    id='message'
                    label='Message'
                    placeholder='Insert your message here.'
                    inputType='text'
                    textarea
                />
                <button className='w-full rounded-xl text-white font-inter font-bold p-3 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50' type="submit">Send</button>
            </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(ContactSection)
