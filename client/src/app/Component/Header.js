import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify/react';


const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [navBackgroundColor, setNavBackgroundColor] = useState('bg-transparent');
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setScrolled(true);
          setNavBackgroundColor('bg-white');
        } else {
          setScrolled(false);
          setNavBackgroundColor('bg-transparent');
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [scrolled, navBackgroundColor]);
  return (
    <div className='relative'>
      <nav
        className={`fixed w-full transition-all h-[8rem] z-50 duration-300 ${navBackgroundColor}`}
      >
        <a href="/">
          <p className={`${scrolled ? 'text-black' : 'text-white'} slide-in-elliptic-top-fwd cursor-pointer absolute top-8 left-6 text-6xl font-bold`}>
            Watts
            <span className="text-blue-500 text-4xl font-bold">.</span>
          </p>
        </a>
        <span className="absolute text-blue-500 top-8 right-[3rem] cursor-pointer text-5xl">
        <Icon icon="ph:list-light" className='text-blue-500' />
                </span>
      </nav>
    </div>
  )
}

export default Header