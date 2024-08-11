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
          return <CardAboutUs text={"Dxa, sit amet consectetur adipisicing elit. Deleniti sint ipsa aliquid, qui rerum, minima illum deserunt alias eaque eius saepe a nostrum autem architecto. Assumenda numquam ad magni sed."} badge={badges} />;
        case 1:
          return <CardAboutUs text={"Raigo, sit amet consectetur adipisicing elit. Deleniti sint ipsa aliquid, qui rerum, minima illum deserunt alias eaque eius saepe a nostrum autem architecto. Assumenda numquam ad magni sed."} badge={badges} />;
        case 2:
          return <CardAboutUs text={"Sofia, sit amet consectetur adipisicing elit. Deleniti sint ipsa aliquid, qui rerum, minima illum deserunt alias eaque eius saepe a nostrum autem architecto. Assumenda numquam ad magni sed."} badge={badges2} />;
        case 3:
          return <CardAboutUs text={"Cuervo, sit amet consectetur adipisicing elit. Deleniti sint ipsa aliquid, qui rerum, minima illum deserunt alias eaque eius saepe a nostrum autem architecto. Assumenda numquam ad magni sed."} badge={badges3} />;
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
