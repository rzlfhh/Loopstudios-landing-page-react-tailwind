import React from 'react'
import images from './images'

const CardCreat = () => {

    const listItems = images.map(({ id, src, srcD, text, description }) =>
        <li key={id} className='md:w-[16em] relative md:flex-[1_0_21%]'>
            <div className='bg-black opacity-30 w-full h-full absolute'></div>
            <img src={src} alt={description} className='h-[100%] object-cover md:hidden' />
            <img src={srcD} alt={description} className='h-[100%] object-cover hidden md:block' />
            <p className='absolute left-4 bottom-4 text-white font-josefin uppercase text-2xl w-[40%] text-left'>{text}</p>
        </li>
    )

    return (
        <ul className='flex flex-col space-y-4 md:md:row-start-2 row-end-3 md:col-start-1 col-end-3 md:mt-8 md:space-y-0 md:flex-row md:flex-wrap md:items-center md:justify-evenly md:gap-4'>
            {listItems}
        </ul>
    )
}

export default CardCreat
