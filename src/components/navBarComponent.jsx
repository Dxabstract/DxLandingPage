import React, { useContext, useEffect, useState } from 'react'
import logoDx from '../assets/logoDx.svg'
import { LanguageContext } from '../context/languajeContext';


function NavBarComponent() {
  const { changeLanguage } = useContext(LanguageContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLanguageChange = (e) => {
    changeLanguage(e.target.value);
  };

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    if (menuOpen) {
      document.documentElement.classList.add('no-scroll');
    } else {
      document.documentElement.classList.remove('no-scroll');
    }
  }, [menuOpen]);

  return (
    <div id='HeaderContent' className="container lg:container-xl mx-auto mt-[21px]">
      <header className='flex items-center justify-between max-sm:px-[10px]'>
        <img src={logoDx} alt="Logo Dx abstract" width={175} height={48} />
        <input type="checkbox" id="menu-toggle" className="hidden" onChange={handleMenuToggle} />
        <label htmlFor="menu-toggle" className="block md:hidden focus:outline-none cursor-pointer">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </label>
        <nav id='NavBarContent'>
          <ul id='listOptions' className=''>
            <li>
              <a className='text-fontDefault' href="#work">Our Work</a>
            </li>
            <li>
            <a className='text-fontDefault' href="#services">Our Services</a>
            </li>
            <li>
            <a className='text-fontDefault' href="#team">Our Team</a>
            </li>
            <li>
            <a className='text-fontDefault' href="#contact">Contact Us</a>
            </li>
            <li>
            <select onChange={handleLanguageChange} className='bg-[#00000000]'>
              <option value="en" className='bg-[#00000000] text-[#242424]'>
                EN
              </option>
              <option value="es" className='bg-[#00000000] text-[#242424]'>
                ES
              </option>
            </select>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default NavBarComponent;