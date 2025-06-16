import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { useFavorites } from '../context/FavoritesContext'
import '../css/ProductCard.css'

export default function ProductCardFavoritos({ producto }) {
  const { favorites, toggleFavorite } = useFavorites()
  const isFavorite = favorites.some(item => item.id === producto.id)

  const manejarClickFavorito = () => {
    console.log('Producto clickeado:', producto)
    console.log('🚀 Producto favorito:', producto)
    toggleFavorite(producto) // Marca o desmarca sin redirigir
  }

  return (
    <div className="card card-producto h-100">
      <img
        src={producto.imagen}
        className="img-fluid card-producto-img"
        alt={producto.nombre}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title d-flex justify-content-between align-items-center">
          {producto.nombre}
          <span
            onClick={manejarClickFavorito}
            className='ms-2'
            style={{ cursor: 'pointer', color: isFavorite ? 'red' : 'gray' }}
          >
            {isFavorite ? <FaHeart /> : <FaRegHeart />}
          </span>
        </h5>
        <p className="card-text text-muted mb-1">{producto.categoria}</p>
        <p className="fw-bold mb-3">${producto.precio}</p>
        <button className="btn btn-outline-primary mt-auto">Ver más detalles</button>
      </div>
    </div>
  )
}