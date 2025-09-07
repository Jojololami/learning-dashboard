import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
    <header className="flex justify-between items-center pl-16 pr-16 bg-[#FFFDD0]">
      <div className="flex justify-between gap-[5px] items-center font-bold text-[14px]">
        <img src={logo} className="w-10" alt="" />
        <p>Learn Tech Hub</p>

      </div>
      <nav>
        <ul className='flex gap-10 items-center text-green-700'>
        <li>
            <Link to='/'>Home</Link>
        </li>

        <li>
            <Link to='/features'>Features</Link>
        </li>

         <li>
            <Link to='/about-us'>About Us</Link>
        </li>

         <li>
            <Link to='/contact-us'>Contact Us</Link>
        </li>
        </ul>
      </nav>
      <div className="auth-buttons">

        <ul className="flex gap-5 items-center">
            <li className=" text-sm text-[#333]">
                <Link to='/log-in'>Log-in</Link>
            </li>
            <li className="ml-4">
                <Link to='/sign-up' className='!px-6 !py-2 rounded-md text-sm bg-black text-white'>Sign Up</Link>
            </li>
        </ul>
    
      </div>
    </header>
    </>
  )
}

export default Header;