import React from 'react';
import logoDxST from '../assets/logoDxST.svg'
import logoInstagram from '../assets/instagram.svg'
import logoWhatsapp from '../assets/whatsapp.svg'
import logoLinkedin from '../assets/linkedin.svg'
import { useTranslation } from 'react-i18next';


const Section1 = () => {
    const {t} = useTranslation();
    return (
        <div id="dxabstract" className='2xl:h-[75vh] h-[100vh] flex justify-center flex-col gap-5'>
            <div className='flex items-center flex-col gap-[24px]' >
                <h1 className='leading-[100%] 2xl:text-fontBigTitles lg:text-fontBigTitles text-fontTitle font-montserrat font-semibold text-center   '>
                    <span>{t('heading1S1')}</span>
                    <br className='block max-sm:hidden'/>
                    <span>
                    {t('heading2S1')}
                    </span>
                </h1>

                <p className='text-fontDefault text-center max-sm:px-4'>
                    <span>{t('paragraph1S1')}</span>
                    <br className='block max-sm:hidden'/>
                    <span>{t('paragraph2S1')}</span>
                    <br className='block max-sm:hidden'/>
                    <span>{t('paragraph3S1')}</span>
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