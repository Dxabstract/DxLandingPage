// src/components/MyBottomNavigation.jsx
import * as React from 'react';
import { useContext } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { NavigationContext } from '../context/buttonContext';

import IconCuervo from '../assets/iconCuervo.svg';
import IconRaigo from '../assets/iconRaigo.svg';
import IconSofia from '../assets/iconSofia.svg';


export default function MyBottomNavigation() {
  const { selectedView, setSelectedView } = useContext(NavigationContext);

  const handleChange = (event, newValue) => {
    setSelectedView(newValue);
  };

  return (
    <BottomNavigation showLabels value={selectedView} onChange={handleChange}>
      <BottomNavigationAction 
        label="Raigo"
        icon={<img className='max-w-[62px]' src={IconRaigo} alt="Cuervo Icon" />} 
      />
      <BottomNavigationAction 
        label="Sofia"
        icon={<img className='max-w-[62px]' src={IconSofia} alt="Cuervo Icon" />} 
      />
      <BottomNavigationAction 
        label="Cuervo"
        icon={<img className='max-w-[62px]' src={IconCuervo} alt="Cuervo Icon" />} 
      />
    </BottomNavigation>
  );
}
