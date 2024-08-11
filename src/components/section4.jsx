import React from 'react';
import Content from './contentAboutSlide';
import MyBottomNavigation from './buttonNavigation';
import ContentIMG from './contentAboutSlideIMG';
import BgAbout from '../assets/aboutBG.svg';

function Section4() {
    return (

      <div id="team" className='relative'>
        <img 
          className='absolute left-0 top-0 w-full h-full object-cover -z-10' 
          src={BgAbout} 
          alt="About Background" 
        />
  
        <div id='contentAboutUs' className='px-[100px] py-[300px] max-sm:p-[20px] relative z-10'>
          <div id="topSideAU" className="flex">
            <div className='w-[60%] max-lg:hidden'></div>
            <div className='w-[40%] max-xl:w-[100%]'>
              <h2 className='font-montserrat font-bold text-fontTitle text-center'>About us</h2>
              <p className='font-inter text-fontDefault text-center  max-md:mb-9 mt-[25px] max-sm:mt-[10px]'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Deleniti sint ipsa aliquid, qui rerum, minima illum deserunt
                alias eaque eius saepe a nostrum autem architecto. Assumenda numquam ad magni sed.
              </p>
            </div>
          </div>
          <div id='botSideAU' className="flex h-[100%] justify-center align-center mt-[200px] max-sm:mt-[20px]">
            <div id='contentInfo' className="w-[60%] flex flex-col gap-[10px] max-sm:w-[100%]">
              <h2 className='font-montserrat font-bold text-fontSubTitle'>Our staff</h2>
  
              <div id="contentButtonsAU" className='flex flex-col gap-5'>
                <Content/>
                <MyBottomNavigation/>
              </div>
            </div>
            <div id='contentIconG' className="w-[40%] flex items-center max-xl:w-[40%] max-sm:hidden">
              <ContentIMG/>
            </div>
          </div>
        </div>
      </div>
    )
  }
  

export default Section4