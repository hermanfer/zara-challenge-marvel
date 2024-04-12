import React from 'react';
import ReactDOM from 'react-dom';
import { FavoritesProvider } from './adapters/state/FavoritesContext.jsx'; // Importa el contexto de favoritos
import App from './ui/App.jsx';
import './main.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <FavoritesProvider>
    <App />
  </FavoritesProvider>
);
