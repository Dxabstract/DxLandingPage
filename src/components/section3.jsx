import React from 'react';
import itemDesing from '../assets/itemDesing.svg';
import itemBranding from '../assets/itemBranding.svg';
import itemCode from '../assets/itemCode.svg';
import itemCons from '../assets/itemCons.svg';
import { useTranslation } from 'react-i18next';


const Section3 = () => {
    const {t} = useTranslation();

    return (
        <div id='services' className='lg:container lg:mx-auto h-fit mb-[100px] [@media(max-height:640px)]:mt-[100px]  flex justify-center max-[1025px]:flex-col max-[1025px]:items-center  lg:gap-0'>
            <div className='w-full max-w-[742px]'>
                
                <hr className='relative max-[1025px]:hidden right-[100%] top-[1px] -z-10 border-[#808080] border-opacity-[55%]' />

                <div className='h-[50%] max-sm:m-4 max-sm:rounded-md max-h-[722px] border border-[#808080] border-opacity-[55%] flex flex-col items-center justify-center'>
                    {/* First Element 0x0 */}
                    <div className='w-[80%] flex flex-col items-center gap-7 lg:gap-12 p-4 lg:p-8'>
                        <div>
                            <h3 className='text-[#a7d910] text-[18px] font-montserrat'>{t('badge1S2')}</h3>
                            <p className='text-[19px] lg:text-[25px] font-bold'>{t('paragraph1S3')}</p>
                        </div>
                        <img className='lg:max-w-[500px]' src={itemDesing} alt="Elemento visual sobre los servicios de diseño" />
                    </div>
                </div>

                <hr className='relative max-[1025px]:hidden  right-[100%] -top-[1px] -z-10 border-[#808080] border-opacity-[55%]' />

                <div className='h-[50%] max-sm:m-4 max-sm:rounded-md max-h-[722px] -mt-[2px] border border-[#808080] border-opacity-[55%] flex flex-col items-center justify-center'>
                    {/* Second element 1x0 */}
                    <div className='w-[80%] flex flex-col items-center gap-7 lg:gap-12 p-4 lg:p-8'>
                        <div>
                            <h3 className='text-[#2FA2E3] text-[18px] font-montserrat'>{t('badge3S2')}</h3>
                            <p className='pt-3 text-[19px] lg:text-[25px] font-bold'>{t('paragraph2S3')}</p>
                        </div>
                        <img className='lg:max-w-[565px]' src={itemBranding} alt="Elemento visual sobre los servicios de diseño" />
                    </div>

                </div>
                <hr className='relative max-[1025px]:hidden  right-[100%] -top-[1px] -z-10 border-[#808080] border-opacity-[55%]' />

            </div>
            <div className='w-[100%] max-w-[742px]'>
                
                <hr className='relative max-[1025px]:hidden w-[100%] top-[77px] left-[100%] -z-10 border-[#808080] border-opacity-[55%]' />

                <div className='lg:mt-[76px] h-[50%] max-sm:m-4 max-sm:rounded-md max-h-[722px]  border border-[#808080] border-opacity-[55%] flex flex-col items-center justify-center'>

                    {/* <hr className='relative max-[1025px]:hidden w-[100%] left-[100%] bottom-[13px] -z-10 border-[#808080] border-opacity-[55%]' /> */}

                    {/* Third Element 0x1 */}
                    <div className='w-[80%] flex flex-col items-center gap-7 lg:gap-12 p-4 lg:p-8'>
                        <div>
                            <h3 className='text-white text-[18px] font-montserrat'>{t('badge2S2')}</h3>
                            <p className='pt-3 text-[19px] lg:text-[25px] font-bold'>{t('paragraph3S3')}</p>
                        </div>
                        <img className='lg:max-w-[500px]' src={itemCode} alt="Elemento visual sobre los servicios de diseño" />
                    </div>
                    
                </div>

                <hr className='relative max-[1025px]:hidden w-[100%] bottom-[1px] left-[100%] -z-10 border-[#808080] border-opacity-[55%]' />

                <div className='h-[50%] max-sm:m-4 max-sm:rounded-md max-h-[722px] -mt-[2px]  border border-[#808080] border-opacity-[55%] flex flex-col items-center justify-center'>
                    {/* Fourth Element 1x1 */}
                    <div className='w-[80%] flex flex-col items-center gap-7 lg:gap-12 p-4 lg:p-8'>
                        <div>
                            <h3 className='text-[#1A597D] text-[18px] font-montserrat'>{t('badge4S2')}</h3>
                            <p className='pt-3 text-[19px] lg:text-[25px] font-bold'>{t('paragraph4S3')}</p>
                        </div>
                        <img className='lg:max-w-[530px]' src={itemCons} alt="Elemento visual sobre los servicios de diseño" />
                    </div>
                </div>
                <hr className='relative max-[1025px]:hidden w-[100%] bottom-[1px] left-[100%] -z-10 border-[#808080] border-opacity-[55%]' />
            </div>
        </div>

    )
}

export default Section3