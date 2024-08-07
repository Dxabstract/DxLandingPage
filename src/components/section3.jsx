import React from 'react';
import itemDesing from '../assets/itemDesing.svg';
import itemBranding from '../assets/itemBranding.svg';
import itemCode from '../assets/itemCode.svg';
import itemCons from '../assets/itemCons.svg';


const Section3 = () => {

    return (
        <div className='lg:container lg:mx-auto h-fit mb-[100px] [@media(max-height:640px)]:mt-[100px]  flex justify-center max-[1025px]:flex-col max-[1025px]:items-center  lg:gap-0'>
            <div className='w-full max-w-[742px]'>
                <div className='h-[50%] max-h-[722px] border border-[#808080] border-opacity-[55%] flex justify-center pt-9 max-lg:pb-6'>
                    {/* First Element 0x0 */}
                    <div className='w-[80%] flex flex-col items-center gap-7 lg:gap-12'>
                        <div>
                            <h3 className='text-[#a7d910] text-[18px] font-montserrat'>Diseño web</h3>
                            <p className='text-[25px] font-bold'>Transforma tus ideas en experiencias digitales impactantes.</p>
                        </div>
                        <img className='lg:max-w-[500px]' src={itemDesing} alt="Elemento visual sobre los servicios de diseño" />
                    </div>
                </div>

                <div className='h-[50%] max-h-[722px]  border border-[#808080] border-opacity-[55%] flex justify-center pt-9 max-lg:pb-6'>
                    {/* Second element 1x0 */}
                    <div className='w-[80%] flex flex-col items-center gap-7 lg:gap-12'>
                        <div>
                            <h3 className='text-[#2FA2E3] text-[18px] font-montserrat'>Branding</h3>
                            <p className='pt-3 text-[25px] font-bold'>Construimos marcas que resuenan y perduran en el mercado.</p>
                        </div>
                        <img className='lg:max-w-[565px]' src={itemBranding} alt="Elemento visual sobre los servicios de diseño" />
                    </div>

                </div>
            </div>
            <div className='w-[100%] max-w-[742px]'>
                <div className='lg:mt-[76px] h-[50%] max-h-[722px]  border border-[#808080] border-opacity-[55%] flex justify-center pt-9 max-lg:pb-6'>
                    {/* Third Element 0x1 */}
                    <div className='w-[80%] flex flex-col items-center gap-7 lg:gap-12'>
                        <div>
                            <h3 className='text-white text-[18px] font-montserrat'>Desarrollo de software</h3>
                            <p className='pt-3 text-[25px] font-bold'>Creamos soluciones de software a medida que impulsan tu negocio.</p>
                        </div>
                        <img className='lg:max-w-[500px]' src={itemCode} alt="Elemento visual sobre los servicios de diseño" />
                    </div>

                </div>
                <div className='h-[50%] max-h-[722px]  border border-[#808080] border-opacity-[55%] flex justify-center pt-9 max-lg:pb-6'>

                    {/* Fourth Element 1x1 */}
                    <div className='w-[80%] flex flex-col items-center gap-7 lg:gap-12'>
                        <div>
                            <h3 className='text-[#1A597D] text-[18px] font-montserrat'>Consultoria</h3>
                            <p className='pt-3 text-[25px] font-bold'>Guiamos tu crecimiento con estrategias digitales personalizadas.</p>
                        </div>
                        <img className='lg:max-w-[565px]' src={itemCons} alt="Elemento visual sobre los servicios de diseño" />
                    </div>
                    
                </div>
            </div>
        </div>

    )
}

export default Section3