import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import ActiveSecProvider from './context/ActiveSection.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ActiveSecProvider>
      <App />
    </ActiveSecProvider>
  </StrictMode>
);
