import React, { useContext } from 'react'
import logo from '../assets/logoDx.svg';
import whatsapp from '../assets/whatsapp.svg';
import linkedin from '../assets/linkedin.svg';
import instagram from '../assets/instagram.svg';
import iconCuervo from '../assets/iconCuervo.svg';
import { LanguageContext } from '../context/languajeContext';

function Footer() {

const { changeLanguage } = useContext(LanguageContext);

  const handleLanguageChange = (e) => {
    changeLanguage(e.target.value);
  };
  return (
    <div className='w-[100%] bg-[#242424] p-[50px]'>
       <div className='flex'>
        <div className='w-[30%]'>
            <img src={logo} alt="" width={200}/>
            <p className='text-badge mt-[15px]'>© Copyright - DxAbstract - 2024</p>
        </div>
        <div className='w-[20%]'>
            <p className='text-[16px] font-semibold'>Contactar</p>
            <p className='mt-[15px] font-extralight	text-[#D8D7D7]'>Escribenos</p>
            <p className='font-bold'>dxabstract@gmail.com</p>
        </div>
        <div className='w-[20%]'>
            <p className='text-[16px] font-semibold'>Siganos</p>
            <div className='flex gap-[20px] mt-[15px]'>
                <a href="">
                    <img src={whatsapp} alt="" width={20}/>
                </a>
                <a href="">
                    <img src={linkedin} alt="" width={20}/>
                </a>
                <a href="">
                    <img src={instagram} alt="" width={20}/>
                </a>
            </div>
        </div>
        <div className='flex gap-[20px] w-[20%]'>
            <img src={iconCuervo} alt="" width={40}/>
            <img src={iconCuervo} alt="" width={40}/>
            <img src={iconCuervo} alt="" width={40}/>
        </div>
       </div>
       <div className='mt-[50px]'>
        <ul className='flex gap-[10%]'>
        <li><select onChange={handleLanguageChange} className='bg-[#00000000] font-bold'>
              <option value="en" className='bg-[#00000000] text-[#242424] font-bold'>
                EN
              </option>
              <option value="es" className='bg-[#00000000] text-[#242424] font-bold'>
                ES
              </option>
            </select></li>
            <li><a className='text-default font-bold'>Our Work</a></li>
            <li><a className='text-default font-bold'>Our Services</a></li>
            <li><a className='text-default font-bold'>Our Team</a></li>
            <li><a className='text-default font-bold'>Contact Us</a></li>
        </ul>
       </div>
       <hr className='border-[1px] border-[#ffffff30] mt-[20px]' />
    </div>
  )
}

export default Footer