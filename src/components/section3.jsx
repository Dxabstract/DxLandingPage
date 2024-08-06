import React from 'react'
import Content from './contentAboutSlide'
import MyBottomNavigation from './buttonNavigation'
import ContentIMG from './contentAboutSlideIMG'

function Section3() {
  return (
    <div id='contentAboutUs' className='bg-aboutBG bg-cover bg-center bg-no-repeat p-[100px] max-xl:p-[50px] max-sm:p-[20px]'>
        <div id="topSideAU" className="flex">
            <div className='w-[50%] max-xl:hidden'></div>
            <div className='w-[50%] max-xl:w-[100%]'>
                <h2 className='font-montserrat font-bold text-fontTitle text-center'>About us</h2>
                <p className='font-inter text-fontDefault text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, veniam ipsa iste vitae impedit odio possimus. Iste illum eveniet quas.</p>
            </div>
        </div>
        <div id='botSideAU' className="flex h-[100%] justify-center align-center mt-[150px]">
            <div id='contentInfo' className="w-[50%] flex flex-col gap-[10px] max-xl:w-[60%] max-sm:w-[100%]">
                <h2 className='font-montserrat font-bold text-fontSubTitle'>Our staff</h2>

                <div id="contentButtonsAU">
                    <Content/>
                    <MyBottomNavigation/>
                </div>
            </div>
            <div id='contentIconG' className="w-[50%] max-xl:w-[40%] max-sm:hidden">
                <ContentIMG/>
            </div>
        </div>
    </div>
  )
}

export default Section3