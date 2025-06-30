import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useFavorites } from '../context/FavoritesContext'

const ProductDetail = () => {
  const { id } = useParams();
  const producto = useSelector(state =>
    state.productos.lista.find(p => p.id === parseInt(id))
  );

  const { favorites, toggleFavorite } = useFavorites()
  const isFavorite = favorites.some(item => item.id === producto.id)

  if (!producto) {
    return <div className="container mt-5">Producto no encontrado.</div>;
  }
  return (
    <div className="container my-5 p-4" style={{maxWidth:"800px"}}>
      <div className="card shadow p-4 border-0">
        <div className="row g-4 align-items-center">
          {/* Imagen más chica */}
          <div className="col-md-5 d-flex justify-content-center">
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="img-fluid rounded"
              style={{ maxHeight: '250px', objectFit: 'contain' }}
            />
          </div>

          {/* Detalles */}
          <div className="col-md-7">
            <h2 className="fw-bold mb-2">{producto.nombre}</h2>
            <p className="text-muted mb-1">Categoría: {producto.categoria}</p>
            <h4 className="text-success mb-3">${producto.precio}</h4>
            <p className="mb-4">{producto.descripcion}</p>

            {/* Botones con color del navbar */}
            <div className="d-flex flex-wrap gap-2">
              <Link to={`/editar/${producto.id}`} className="btn btn-primary">
                ✏️ Editar
              </Link>
              <Link to="/" className="btn btn-outline-primary">
                🏠 Volver
              </Link>
              <button
                className={`btn ${isFavorite ? 'btn-danger' : 'btn-outline-danger'}`}
                onClick={() => toggleFavorite(producto)}
              >
                {isFavorite ? '❤️ Quitar de Favoritos' : '🤍 Agregar a Favoritos'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
