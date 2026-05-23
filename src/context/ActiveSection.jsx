import { createContext, useState } from 'react';

export const ActiveSecCntxt = createContext();

export default function ActiveSecProvider({ children }) {
  const [activeSec, setActiveSec] = useState('');

  return (
    <ActiveSecCntxt.Provider value={{ activeSec, setActiveSec }}>
      {children}
    </ActiveSecCntxt.Provider>
  );
}
