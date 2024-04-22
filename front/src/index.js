import React from 'react';
import { createRoot } from 'react-dom/client'; 
import { FavoritesProvider } from './adapters/state/FavoritesContext.jsx';
import App from './ui/App.jsx';
import './main.scss';

createRoot(document.getElementById('root')).render( 
  <FavoritesProvider>
    <App />
  </FavoritesProvider>
);
