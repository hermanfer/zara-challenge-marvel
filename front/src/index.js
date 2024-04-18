import React from 'react';
import { createRoot } from 'react-dom/client'; // Cambio en la importación
import { FavoritesProvider } from './adapters/state/FavoritesContext.jsx';
import App from './ui/App.jsx';
import './main.scss';

createRoot(document.getElementById('root')).render( // Cambio en la llamada de la función
  <FavoritesProvider>
    <App />
  </FavoritesProvider>
);
