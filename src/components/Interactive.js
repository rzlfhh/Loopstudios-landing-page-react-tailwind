import React from 'react'
import interactive from '../images/desktop/image-interactive.jpg'

const Interactive = () => {
    return (
        <section className='px-4 md:px-16 md:flex md:items-center md:justify-center md:gap-0 border-2 md:mb-32'>
            <div className='md:w-[50%]'>
                <img src={interactive} alt="" className='mt-16 mb-8' />
            </div>
            <div className='bg-white md:w-[40%] md:bottom-0 md:right-0 md:p-8 md:-translate-x-6 md:translate-y-12'>
                <h1 className='text-3xl font-josefin uppercase mb-4'>The leader in interactive VR</h1>
                <p>Founded in 2011, Loopstudios has been producing world-class virtual reality
                    projects for some of the best companies around the globe. Our award-winning
                    creations have transformed businesses through digital experiences that bind
                    to their brand.</p>
            </div>
        </section>
    )
}

export default Interactive
