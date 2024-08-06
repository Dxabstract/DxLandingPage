// src/components/MyBottomNavigation.jsx
import * as React from 'react';
import { useContext } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { NavigationContext } from '../context/buttonContext';


export default function MyBottomNavigation() {
  const { selectedView, setSelectedView } = useContext(NavigationContext);

  const handleChange = (event, newValue) => {
    setSelectedView(newValue);
  };

  return (
    <BottomNavigation showLabels value={selectedView} onChange={handleChange}>
      <BottomNavigationAction label="DxA" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Raigo" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Sofi" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Cuervo" icon={<LocationOnIcon />} />
    </BottomNavigation>
  );
}
