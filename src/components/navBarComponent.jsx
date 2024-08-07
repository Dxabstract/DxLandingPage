import React, { useState } from 'react'
import logoDx from '../assets/logoDx.svg'


function NavBarComponent() {

  return (
    <div id='HeaderContent' className="container lg:container-xl mx-auto mt-[21px]">
      <header className='flex items-center justify-between max-sm:px-[10px]'>
        <img src={logoDx} alt="Logo Dx abstract" width={175} height={48} />
        <input type="checkbox" id="menu-toggle" className="hidden" />
        <label htmlFor="menu-toggle" className="block md:hidden focus:outline-none cursor-pointer">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </label>
        <nav id='NavBarContent'>
          <ul id='listOptions' className=''>
            <li>
              <button className='text-fontDefault'>Our Work</button>
            </li>
            <li>
              <button className='text-fontDefault'>Our Services</button>
            </li>
            <li>
              <button className='text-fontDefault'>Our Team</button>
            </li>
            <li>
              <button className='text-fontDefault'>Contact Us</button>
            </li>
            <li>
              <button className='text-fontDefault'>
                Idioma:Es
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default NavBarComponent;