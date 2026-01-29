import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};

export const AppProvider = ({ children }) => {
  const [userRole, setUserRole] = useState(null); // 'resident', 'owner', 'police'
  const [selectedLocation, setSelectedLocation] = useState({
    city: '',
    area: '',
    society: ''
  });
  const [isSocietyMember, setIsSocietyMember] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(256); // w-64 = 256px

  const value = {
    userRole,
    setUserRole,
    selectedLocation,
    setSelectedLocation,
    isSocietyMember,
    setIsSocietyMember,
    sidebarWidth,
    setSidebarWidth
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
