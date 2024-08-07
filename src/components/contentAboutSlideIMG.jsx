// src/components/Content.jsx
import React, { useContext } from 'react';
import { NavigationContext } from '../context/buttonContext';

import Ejemplo1 from '../assets/ejemplo1.svg';
import Ejemplo2 from '../assets/ejemplo2.svg';
import Ejemplo3 from '../assets/ejemplo3.svg';
import iconCuervo from '../assets/iconCuervo.svg';


const ContentIMG = () => {
    const { selectedView } = useContext(NavigationContext);
  
    const renderContent = () => {
      switch (selectedView) {
        case 0:
          return <img src={Ejemplo1} alt="" width={300} className='max-sm:w-[100px]' />;
        case 1:
          return <img src={Ejemplo2} alt="" width={300} className='max-sm:w-[100px]'/>;
        case 2:
          return <img src={Ejemplo3} alt="" width={300} className='max-sm:w-[100px]'/>;
        case 3:
          return <img src={iconCuervo} alt="" width={300} className='max-sm:w-[100px]'/>;
        default:
          return <h1>Welcome</h1>;
      }
    };
  
    return <div className='h-[250px] max-sm:h-[150px]' style={{ flex: 1,display: 'flex', justifyContent: 'center',alignItems: 'center' }}>{renderContent()}</div>;
  };
  
  export default ContentIMG;
