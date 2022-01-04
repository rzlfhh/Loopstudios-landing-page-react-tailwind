import React from 'react'
import Header from './Header'

const Hero = () => {
    return (
        <section className="h-screen px-4 bg-hero-mobile md:bg-hero-desktop md:bg-cover md:bg-center bg-cover bg-no-repeat text-center text-white grid content-center relative md:px-16 lg:px-28 xl:px-[11em]">
            <Header />
            <h1 className='border-2 border-white p-7 text-4xl uppercase font-josefin text-left w-fit md:w-[70%] lg:w-[50%]'>immersive experiences that deliver</h1>
        </section>
    )
}

export default Hero
