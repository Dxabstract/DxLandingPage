// src/contexts/NavigationContext.jsx
import React, { createContext, useState } from 'react';

export const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
    const [selectedView, setSelectedView] = useState(0);
  
    const badges = [
      { text: 'Desarrollador', color: '#A7D910' },
      { text: 'CEO', color: '#E3E8EA' },
      // Puedes agregar más badges aquí
    ];
    const badges2 = [
      { text: 'Diseñadora', color: '#D98910' },
      { text: 'CEO', color: '#E3E8EA' },
      // Puedes agregar más badges aquí
    ];
    const badges3 = [
      { text: 'Desarrollador', color: '#A7D910' },
      { text: 'CEO', color: '#E3E8EA' },
      // Puedes agregar más badges aquí
    ];
  
    return (
      <NavigationContext.Provider value={{ selectedView, setSelectedView, badges, badges2, badges3 }}>
        {children}
      </NavigationContext.Provider>
    );
  };
