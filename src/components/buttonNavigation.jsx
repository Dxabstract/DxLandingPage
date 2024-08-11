// src/components/MyBottomNavigation.jsx
import * as React from 'react';
import { useContext } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { NavigationContext } from '../context/buttonContext';

import IconCuervo from '../assets/iconCuervo.svg';
import IconRaigo from '../assets/iconRaigo.svg';
import IconSofia from '../assets/iconSofia.svg';
import IconDxa from '../assets/DxA.png';

export default function MyBottomNavigation() {
  const { selectedView, setSelectedView } = useContext(NavigationContext);

  const handleChange = (event, newValue) => {
    setSelectedView(newValue);
  };

  return (
    <BottomNavigation showLabels value={selectedView} onChange={handleChange}>
      <BottomNavigationAction 
        icon={<img className='max-w-[62px]' src={IconDxa} alt="Dxa Icon" />} 
      />
      <BottomNavigationAction 
        icon={<img className='max-w-[62px]' src={IconRaigo} alt="Raigo Icon" />} 
      />
      <BottomNavigationAction 
        icon={<img className='max-w-[62px]' src={IconSofia} alt="Sofia Icon" />} 
      />
      <BottomNavigationAction 
        icon={<img className='max-w-[62px]' src={IconCuervo} alt="Cuervo Icon" />} 
      />
    </BottomNavigation>
  );
}
