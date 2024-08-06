import React from 'react';
import NavBarComponent from './navBarComponent';
import logoDxST from '../assets/logoDxST.svg'
import logoInstagram from '../assets/instagram.svg'
import logoWhatsapp from '../assets/whatsapp.svg'
import logoLinkedin from '../assets/linkedin.svg'
import { useLanguage } from '../context/languageContext';
import { translations } from '../translations';


const Section1 = () => {
    const { language } = useLanguage();

    return (
        <div className='h-[100vh] flex flex-col justify-between items-center' >
            <NavBarComponent/>
            <div className='' >
                <h1 className='2xl:text-fontBigTitles lg:text-fontBigTitles text-fontTitle font-montserrat font-semibold text-center   '>
                
                <span>{translations[language].welcome}</span>
                <br />
                <span>{translations[language].welcome2}</span>
                </h1>

                <p className='text-fontDefault text-center'>
                    Impulsa tu marca con nuestras soluciones creativas en branding, diseño web y desarrollo
                    <br className="lg:block sm:hidden" />
                    de software. Experimenta una transformación fluida y una orientación experta diseñada
                    <br className="lg:block sm:hidden" />
                    para dar vida a tu visión. Únete a nosotros y eleva el potencial de tu proyecto.
                </p>

                <div className='flex gap-[45px] h-[73px] w-[298px]'>
                    <img src={logoWhatsapp} alt="" />
                    <img src={logoInstagram} alt="" />
                    <img src={logoLinkedin} alt="" />
                    <img src={logoDxST} alt="" />
                </div>
            </div>
            
            <div className='flex justify-end pt-[54px]'>
                <svg width="1167" height="2" viewBox="0 0 1416 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.5 1H1417" stroke="#E3E8EA"/>
                </svg>
            </div>
            
        </div>
    )
}


export default Section1