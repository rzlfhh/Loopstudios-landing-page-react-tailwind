import React from 'react'
import logo from '../images/logo.svg'
import hamburger from '../images/icon-hamburger.svg'

const Header = () => {
    return (
        <header className='flex items-center justify-between absolute top-0 left-0 right-0 mt-8 px-4 md:px-16'>
            <img src={logo} alt="logo" className='w-[12.2em]' />
            <nav className='hidden md:block text-white'>
                <ul className='flex items-center space-x-4 '>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Events</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Support</a></li>
                </ul>
            </nav>
            <img src={hamburger} alt="ham" className='w-8 cursor-pointer md:hidden' />
        </header>
    )
}

export default Header
