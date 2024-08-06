import React from 'react'
import logoDx from '../assets/logoDx.svg'
import { useLanguage } from '../context/languageContext';
import { translations } from '../translations';


function NavBarComponent() {
  const { language, toggleLanguage } = useLanguage();
  return (
    <div id='HeaderContent' className="container lg:container-xl mx-auto mt-[21px]">
      <header className='flex items-center justify-between'>
        <img className='' src={logoDx} alt="Logo Dx abstract" width={175} height={48} />
        <nav id='NavBarContent'>
          <div>
            <ul className='flex md:gap-7 lg:gap-[64px]'>
              <li>
                <button className='text-fontDefault' >Our Work</button>
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
                <button onClick={toggleLanguage}>
                  {translations[language].language}: {language.toUpperCase()}
                </button>
              </li>
            </ul>
          </div>
        </nav>

      </header>
    </div>
  )
}

export default NavBarComponent