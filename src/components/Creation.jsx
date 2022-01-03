import React from 'react'
import CardCreat from './CardCreat'

const Creation = () => {
    return (
        <section className='px-4 mt-16 mb-28 md:px-16 md:grid md:grid-cols-2 md:items-center'>
            <div className='md:col-start-1 col-end-2'>
                <h2 className='text-3xl font-josefin uppercase mb-8 md:mb-0'>Our creations</h2>
            </div>
            <CardCreat />
            <div className='mt-8 md:col-start-2 col-end-3 md:mt-0 md:grid md:place-content-end'>
                <button className='uppercase border-[1px] py-2 px-8 tracking-widest w-fit'>See all</button>
            </div>
        </section>
    )
}

export default Creation
