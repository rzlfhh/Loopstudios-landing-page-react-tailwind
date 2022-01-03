import React from 'react'
import logo from '../images/logo.svg'
import fb from '../images/icon-facebook.svg'
import twitter from '../images/icon-twitter.svg'
import pin from '../images/icon-pinterest.svg'
import ig from '../images/icon-instagram.svg'

const Footer = () => {
    return (
        <footer className='bg-black px-4 pt-14 pb-8 text-white'>
            <div>
                <div>
                    <img src={logo} alt="logo" className='w-[11em] mx-auto' />
                    <ul className='space-y-4 mt-8'>
                        <li> <a href="#">About</a> </li>
                        <li> <a href="#">Careers</a> </li>
                        <li> <a href="#">Events</a> </li>
                        <li> <a href="#">Products</a> </li>
                        <li> <a href="#">Support</a> </li>
                    </ul>
                </div>

                <div className='mt-12 space-y-4'>
                    <div className='flex items-center justify-center space-x-4'>
                        <img src={fb} alt="" className='w-[1.6em]' />
                        <img src={twitter} alt="" className='w-[1.6em]' />
                        <img src={pin} alt="" className='w-[1.6em]' />
                        <img src={ig} alt="" className='w-[1.6em]' />
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
