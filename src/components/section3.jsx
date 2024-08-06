import React from 'react'
import ItemBadge from './itemBadge'

function Section3() {
  return (
    <div id='contentAboutUs' className='bg-aboutBG bg-cover bg-center bg-no-repeat h-[100vh]'>
        <div id="topSideAU" className="flex">
            <div className='w-[50%]'></div>
            <div className='w-[50%]'>
                <h2 className='font-montserrat font-bold text-fontTitle text-center'>About us</h2>
                <p className='font-inter text-fontDefault text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, veniam ipsa iste vitae impedit odio possimus. Iste illum eveniet quas.</p>
            </div>
        </div>
        <div id='botSideAU' className="flex h-[100%] p-[20px]">
            <div id='contentInfo' className="w-[50%] flex flex-col gap-[10px]">
                <h2 className='font-montserrat font-bold text-fontSubTitle'>Our staff</h2>

                <div id="contentBadgeAU" className='flex gap-[5px]'>
                <ItemBadge text={'Desarrollador'} color={'#A7D910'}/>
                <ItemBadge text={'CEO'} color={'#E3E8EA'}/>
                </div>

                <p className='font-fontDefault w-[80%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque in magni delectus omnis rem perferendis suscipit temporibus, amet vel quam. Earum asperiores voluptatum inventore excepturi eos modi iusto rem odio!</p>

                <div id="contentButtonsAU">
                    //acá van los botones del carrousel
                </div>
            </div>
            <div id='contentIconG' className="w-[50%]">Lorem</div>
        </div>
    </div>
  )
}

export default Section3