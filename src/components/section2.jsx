import React from 'react';
import ItemBadge from './itemBadge'
import LogoDxGreen from '../assets/LogoDxGreen.svg';

const Section2 = () => {

    return (
        <div className='h-[100vh] flex justify-center'>

            <div className='relative container sm:max-[1025px]:mx-9 max-w-[1111px] h-full max-h-[511px]'>
                <div className='absolute inset-0 bg-[#3C3C43] opacity-25 rounded-[20px]'></div>


                <div className='relative z-10 h-[30%] pl-[4%] lg:flex  max-lg:pt-8 flex-wrap items-center justify-start gap-5'> 
                    <h2 className='text-[30px] font-montserrat font-semibold text-white'>
                        Tú viaje completo con DxAbstract
                    </h2>
                    <h2 className='text-[18px] font-montserrat text-white'>
                        Conoce nuestros servicos                    
                    </h2>
                </div>
                <hr class="border-gray-500"/>

                <div className='h-[70%] p-7 w-full flex'>
                    <div className='w-[70%]'>
                        <div className='flex gap-[19px] flex-wrap'>
                        <ItemBadge text={'Diseño web'} color={'#A7D910'}/>
                        <ItemBadge text={'Desarrollo de software'} color={'#FFFFFF'}/>
                        <ItemBadge text={'Branding'} color={'#2FA2E3'}/>
                        <ItemBadge text={'Consultoria'} color={'#1A597D'}/>
                        </div>
                        <div className='w-[70%] h-full pt-[5%]'> 
                            <p className='md:text-fontDefault lg:text-fontSubTitle'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti sint ipsa aliquid, qui rerum, minima illum deserunt alias eaque eius saepe a nostrum autem architecto. Assumenda numquam ad magni sed.</p>
                        </div>
                    </div>
                    <div className='w-[50%] flex items-center pr-[5%]'>
                        <img src={LogoDxGreen} alt="Logo de Dx Abstract variacion en verde" />
                    </div>
                </div>

            </div>

        </div>

    )
}

export default Section2