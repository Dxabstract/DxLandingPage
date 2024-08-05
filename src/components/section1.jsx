import React from 'react';
import NavBarComponent from './navBarComponent';

import logoDxST from '../assets/logoDxST.svg'
import logoInstagram from '../assets/instagram.svg'
import logoWhatsapp from '../assets/whatsapp.svg'
import logoLinkedin from '../assets/linkedin.svg'


const Section1 = () => {

    return (
        <div className='h-[924px]' >
            <NavBarComponent/>
            <div className='pt-[307px] flex items-center flex-col gap-9' >
                <h1 className='2xl:text-fontBigTitles md:text-fontTitle font-montserrat font-semibold text-center   '>
                    Potencia tu Recorrido Creativo <br/>
                    Diseña aquí. Desarrolla aquí
                </h1>

                <p className='text-fontDefault text-center'>
                    Impulsa tu marca con nuestras soluciones creativas en branding, diseño web y desarrollo<br/>
                    de software. Experimenta una transformación fluida y una orientación experta diseñada<br/>
                    para dar vida a tu visión. Únete a nosotros y eleva el potencial de tu proyecto.
                </p>

                <div className='flex gap-[50px]'>
                    <img src={logoWhatsapp} alt="" />
                    <img src={logoInstagram} alt="" />
                    <img src={logoLinkedin} alt="" />
                    <img src={logoDxST} alt="" />
                </div>

                {/* <svg width="1416" height="2" viewBox="0 0 1416 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.5 1H1417" stroke="#E3E8EA"/>
                </svg> */}


            </div>

        </div>
    )
}


export default Section1