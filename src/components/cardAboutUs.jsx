import React from 'react'
import ItemBadge from './itemBadge'

function CardAboutUs({text, badge}) {
    
  
    return (
      <div id="contentInfo" className="w-[50%] flex flex-col gap-[10px] max-sm:w-[100%] max-lg:w-[80%]">
  
        <div id="contentBadgeAU" className="flex gap-[5px]">
          {badge.map((item, index) => (
            <ItemBadge key={index} text={item.text} color={item.color} />
          ))}
        </div>
  
        <p className="font-fontDefault w-[80%]">
          {text}
        </p>
      </div>
    );
  }
  
  export default CardAboutUs;