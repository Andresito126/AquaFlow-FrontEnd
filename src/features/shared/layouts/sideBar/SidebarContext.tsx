import React, { createContext, useState, useContext, type ReactNode } from 'react';

type SidebarContextType = {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;

  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>; 
};

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const SidebarProvider = ({ children }: { children: ReactNode }) => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false); 

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  return (
    <SidebarContext.Provider value={{ isSidebarOpen, toggleSidebar, setIsSidebarOpen }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebar debe usarse dentro de un SidebarProvider');
  }
  return context;
};