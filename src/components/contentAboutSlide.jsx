// src/components/Content.jsx
import React, { useContext } from 'react';
import { NavigationContext } from '../context/buttonContext';
import CardAboutUs from './cardAboutUs';
import ContentIMG from './contentAboutSlideIMG';

const Content = () => {
    const { selectedView, badges, badges2, badges3 } = useContext(NavigationContext);
  
    const renderContent = () => {
      switch (selectedView) {
        case 0:
          return <CardAboutUs text={"Hola somo DxAbstract"} badge={badges} />;
        case 1:
          return <CardAboutUs text={"Hola soy Raigo"} badge={badges} />;
        case 2:
          return <CardAboutUs text={"Hola soy Sofi"} badge={badges2} />;
        case 3:
          return <CardAboutUs text={"Hola soy Cuervo"} badge={badges3} />;
        default:
          return <h1>Welcome</h1>;
      }
    };
  
    return <div style={{ flex: 1, height:'250px' }}>
      {renderContent()}
      <div className='hidden max-sm:block'>
       <ContentIMG/>
      </div>
      
      </div>;
  };
  
  export default Content;
