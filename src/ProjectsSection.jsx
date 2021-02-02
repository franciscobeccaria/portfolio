import React, {useRef, useEffect} from 'react'

const ProjectsSection = () => {

    const box = useRef(null)

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
        });
      
    }, [])

    

    return (
        <section className='w-full h-screen flex justify-center items-center'>
            <h2 className='font-inter'>Some projects</h2>
            <div className='flex justify-center items-center'>
                
            </div>
        </section>
    )
}

export default ProjectsSection
