import { useFavorites } from '../context/FavoritesContext'
import ProductCardFavoritos from '../components/ProductCardFavoritos'

export default function Favorites() {
  const { favorites } = useFavorites()

  return (
    <div className="container mt-4">
      <h1>Productos Favoritos</h1>

      {favorites.length === 0 ? (
        <p>No hay productos favoritos.</p>
      ) : (
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {favorites.map(producto => (
            <div className="col" key={producto.id}>
              <ProductCardFavoritos producto={producto} />
            </div>
          ))}
        </div>
      )}
    </div>
   
  )
}