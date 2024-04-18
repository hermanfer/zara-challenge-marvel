import React, { createContext, useState, useContext } from "react";

const FavoritesContext = createContext();

export const useFavorites = () => {
  return useContext(FavoritesContext);
};

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [favoriteCount, setFavoriteCount] = useState(0);

  const toggleFavorite = (character) => {
    setFavorites((prevFavorites) => {
      const isFavorited = prevFavorites.some((fav) => fav.id === character.id);

      if (isFavorited) {
        setFavoriteCount((prevCount) => prevCount - 1);
        return prevFavorites.filter((fav) => fav.id !== character.id);
      } else {
        setFavoriteCount((prevCount) => prevCount + 1);
        return [...prevFavorites, character];
      }
    });
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, favoriteCount, toggleFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
