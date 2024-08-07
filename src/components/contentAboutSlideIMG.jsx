// src/components/Content.jsx
import React, { useContext } from 'react';
import { NavigationContext } from '../context/buttonContext';

import iconRaigo from '../assets/iconRaigo.svg';
import iconSofia from '../assets/iconSofia.svg';
import iconCuervo from '../assets/iconCuervo.svg';


const ContentIMG = () => {
    const { selectedView } = useContext(NavigationContext);
  
    const renderContent = () => {
      switch (selectedView) {
        case 0:
          return <img src={iconRaigo} alt="" width={300} className='max-sm:w-[100px]' />;
        case 1:
          return <img src={iconSofia} alt="" width={300} className='max-sm:w-[100px]'/>;
        case 2:
          return <img src={iconCuervo} alt="" width={300} className='max-sm:w-[100px]'/>;

        default:
          return <h1>Welcome</h1>;
      }
    };
  
    return <div className='h-[250px] max-sm:h-[150px]' style={{ flex: 1,display: 'flex', justifyContent: 'center',alignItems: 'center' }}>{renderContent()}</div>;
  };
  
  export default ContentIMG;
