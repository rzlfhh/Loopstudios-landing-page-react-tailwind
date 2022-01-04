import React from 'react'
import logo from '../images/logo.svg'
import fb from '../images/icon-facebook.svg'
import twitter from '../images/icon-twitter.svg'
import pin from '../images/icon-pinterest.svg'
import ig from '../images/icon-instagram.svg'

const Footer = () => {
    return (
        <footer className='bg-black px-4 pt-14 pb-8 text-white md:px-16 lg:px-28 xl:px-[11em]'>
            <div className='md:flex md:items-center md:justify-between'>
                <div>
                    <img src={logo} alt="logo" className='w-[11em] mx-auto md:mx-0' />
                    <ul className='space-y-4 mt-8 md:flex md:space-y-0 md:gap-4 md:mt-4'>
                        <li className='hover:border-b-2 hover:transition-all'> <a href="#">About</a> </li>
                        <li className='hover:border-b-2 hover:transition-all'> <a href="#">Careers</a> </li>
                        <li className='hover:border-b-2 hover:transition-all'> <a href="#">Events</a> </li>
                        <li className='hover:border-b-2 hover:transition-all'> <a href="#">Products</a> </li>
                        <li className='hover:border-b-2 hover:transition-all'> <a href="#">Support</a> </li>
                    </ul>
                </div>

                <div className='mt-12 space-y-4 md:mt-0 md:space-y-0'>
                    <div className='flex items-center justify-center space-x-4 md:justify-end md:mb-4'>
                        <a href="#">
                            <img src={fb} alt="" className='w-[1.6em] md:py-[.6em] hover:border-b-2 hover:transition-all cursor-pointer' />
                        </a>
                        <a href="#">
                            <img src={twitter} alt="" className='w-[1.6em] md:py-[.6em] hover:border-b-2 hover:transition-all cursor-pointer' />
                        </a>
                        <a href="#">
                            <img src={pin} alt="" className='w-[1.6em] md:py-[.6em] hover:border-b-2 hover:transition-all cursor-pointer' />
                        </a>
                        <a href="#">
                            <img src={ig} alt="" className='w-[1.6em] md:py-[.6em] hover:border-b-2 hover:transition-all cursor-pointer' />
                        </a>
                    </div>
                    <p>© 2021 Loopstudios. All rights reserved.</p>
                </div>
            </div>
            <div className="attribution mt-8">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
                Coded by <a href="https://github.com/rzlfhh" target='_blank'>rzlfhh</a>.
            </div>
        </footer>
    )
}

export default Footer
