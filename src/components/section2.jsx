import React from 'react';
import ItemBadge from './itemBadge'
import LogoDxGreen from '../assets/LogoDxGreen.svg';

const Section2 = () => {

    return (
        <div className='2xl:h-[70vh] [@media(max-height:635px)]:h-[110vh] h-[80vh] flex justify-center'>
            <div className='relative container sm:max-[1190px]:mx-9 max-w-[1111px] h-full max-h-[511px]'>
                <div className='absolute inset-0 bg-[#3C3C43] opacity-25 rounded-[20px]'></div>


                <div className='relative z-10 h-[30%] pl-[4%] lg:flex  max-lg:pt-8 flex-wrap items-center justify-start gap-5'> 
                    <h2 className='text-[30px] font-montserrat font-semibold text-white'>
                        Tú viaje completo con DxAbstract
                    </h2>
                    <h2 className='text-[18px] font-montserrat text-white'>
                        Conoce nuestros servicos                    
                    </h2>
                </div>
                <hr className="border-gray-500"/>

                <div className='hidden h-[70%] p-7 w-full  sm:flex'>
                    <div className='w-[70%]'>
                        <div className='flex gap-[19px] flex-wrap'>
                        <ItemBadge text={'Diseño web'} color={'#A7D910'}/>
                        <ItemBadge text={'Desarrollo de software'} color={'#FFFFFF'}/>
                        <ItemBadge text={'Branding'} color={'#2FA2E3'}/>
                        <ItemBadge text={'Consultoria'} color={'#9874F5'}/>
                        </div>
                        <div className='w-[70%] h-full pt-[5%]'> 
                            <p className='md:text-fontDefault lg:text-[22px]'>
                                En Dxabstracts, te acompañamos en todo tu viaje digital, desde el diseño y desarrollo 
                                de software hasta la consultoría y el branding. Ofrecemos soluciones personalizadas y 
                                soporte continuo para convertir tu visión en realidad.

                            </p>
                        </div>
                    </div>
                    <div className='w-[50%] flex items-center pr-[5%]'>
                        <img src={LogoDxGreen} alt="Logo de Dx Abstract variacion en verde" />
                    </div>
                </div>

                <div className='flex items-start h-[70%] p-4 w-full sm:hidden'>
                    <div className='w-[70%]'>
                        <div className='pr-3 h-full pt-7 flex items-center'> 
                            <p className='text-[16px] text-justify'>
                                En Dxabstracts, te acompañamos en todo tu viaje digital, desde el diseño y desarrollo 
                                de software hasta la consultoría y el branding. Ofrecemos soluciones personalizadas y 
                                soporte continuo para convertir tu visión en realidad.
                            </p>
                        </div>
                    </div>
                    <div className='w-[50%] flex items-center pt-7'>
                        <div className='flex gap-[20px] flex-wrap pt-6'>
                            <ItemBadge text={'Diseño web'} color={'#A7D910'}/>
                            <ItemBadge text={'Desarrollo de software'} color={'#FFFFFF'}/>
                            <ItemBadge text={'Branding'} color={'#2FA2E3'}/>
                            <ItemBadge text={'Consultoria'} color={'#1A597D'}/>
                        </div>
                    </div>
                </div>


            </div>

        </div>

    )
}

export default Section2