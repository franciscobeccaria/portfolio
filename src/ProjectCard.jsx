import React from 'react'
import styled from 'styled-components'

import { projectModal } from './redux/actionCreators';
import {connect} from 'react-redux'

const Wrapper = styled.div`
    &:hover .div-image {
        height: 100%;
        width: 100%;
        padding: 0;
        transition: all 0.5s;
        opacity: 0.75;
        border-radius: 0.25rem;
        & img {
            border-radius: 0.25rem;
        }
    }
    &:hover .div-title {
        opacity: 0;
        height: 0;
    }
    &:hover button {
        opacity: 1;
        z-index: 1;
        transform: translateX(-50%) translateY(-50%);
    }
`

const ProjectCard = ({title, image, website, repo, stack, description, technique, projectModalReducer}) => {
    return (
        <Wrapper className='relative cursor-pointer h-60 w-60 m-4 mx-8 sm:m-8 rounded flex-grow bg-gradient-to-b from-green-400 to-blue-500'>
            <div className='div-image h-5/6 w-7/8 flex items-center justify-center p-4 pb-0 transition-all duration-500'>
                <img className='h-full w-full object-cover' src={image} alt="website"/>
            </div>
            <div className='div-title h-1/6 w-7/8 flex items-center justify-center transition-all duration-500 font-semibold text-white text-lg'>
                <h4>{title}</h4>
            </div>
            <button onClick={() => projectModalReducer({visibility: true, data: {title, image, website, repo, stack, description, technique}})} className='z-neg opacity-0 absolute top-1/2 left-1/2 rounded-xl text-white font-inter font-bold p-3 bg-blue-600 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 transition-all duration-500'>Learn More</button>
        </Wrapper>
    )
}

const mapStateToProps = state => (
    {}
)

const mapDispatchToProps = dispatch => ({
    projectModalReducer(data){
        dispatch(projectModal(data))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ProjectCard)
