import { createContext, useContext, useState } from 'react';

const FavoritesContext = createContext();
export const useFavorites = () => useContext(FavoritesContext);

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (producto) => {
    const exists = favorites.some(item => item.id === producto.id);
    if (exists) {
      setFavorites(favorites.filter(item => item.id !== producto.id));
    } else {
      setFavorites([...favorites, producto]);
    }
    console.log('🔥 Favoritos actualizados:', favorites)
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
   
  );
};

export default FavoritesProvider;