import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useFavorites } from '../context/FavoritesContext';
import { FaHeart, FaRegHeart, FaEdit, FaHome, FaStar } from 'react-icons/fa';

const ProductDetail = () => {
  const { id } = useParams();
  const producto = useSelector(state =>
    state.productos.lista.find(p => p.id === parseInt(id))
  );

  const { favorites, toggleFavorite } = useFavorites()
  const isFavorite = favorites.some(item => item.id === producto.id)

  if (!producto) {
    return (
      <div className="container mt-5 text-center">
        <div className="py-5">
          <i className="fas fa-exclamation-triangle fa-3x text-warning mb-3"></i>
          <h3>Producto no encontrado</h3>
          <Link to="/" className="btn btn-primary">Volver al inicio</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="card border-0 shadow-lg rounded-3 overflow-hidden">
            <div className="row g-0">
              {/* Imagen del producto */}
              <div className="col-md-6 bg-gradient-primary d-flex align-items-center justify-content-center p-5" 
                   style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
                <div className="text-center">
                  <img
                    src={producto.imagen}
                    alt={producto.nombre}
                    className="img-fluid rounded-3 shadow"
                    style={{ maxHeight: '300px', objectFit: 'contain' }}
                  />
                </div>
              </div>

              {/* Detalles del producto */}
              <div className="col-md-6 p-5">
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <div>
                    <span className="badge bg-primary rounded-pill mb-2">{producto.categoria}</span>
                    <h2 className="fw-bold text-dark mb-2">{producto.nombre}</h2>
                  </div>
                  <button
                    className={`btn btn-sm ${isFavorite ? 'btn-danger' : 'btn-outline-danger'} rounded-circle`}
                    onClick={() => toggleFavorite(producto)}
                    style={{width: '40px', height: '40px'}}
                  >
                    {isFavorite ? <FaHeart /> : <FaRegHeart />}
                  </button>
                </div>

                <div className="mb-4">
                  <div className="d-flex align-items-center mb-2">
                    <div className="text-warning me-2">
                      <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    </div>
                    <span className="text-muted">(4.8/5)</span>
                  </div>
                  <h3 className="text-primary fw-bold mb-3">${producto.precio}</h3>
                  <p className="text-muted mb-4">{producto.descripcion}</p>
                </div>

                {/* Características */}
                <div className="mb-4">
                  <h6 className="fw-bold mb-3">Características:</h6>
                  <div className="row g-2">
                    <div className="col-6">
                      <div className="d-flex align-items-center text-muted">
                        <i className="fas fa-check-circle text-success me-2"></i>
                        <small>Garantía incluida</small>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="d-flex align-items-center text-muted">
                        <i className="fas fa-shipping-fast text-primary me-2"></i>
                        <small>Envío gratis</small>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="d-flex align-items-center text-muted">
                        <i className="fas fa-undo text-info me-2"></i>
                        <small>Devolución 30 días</small>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="d-flex align-items-center text-muted">
                        <i className="fas fa-headset text-warning me-2"></i>
                        <small>Soporte 24/7</small>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Botones de acción */}
                <div className="d-flex flex-wrap gap-3">
                  <Link to={`/editar/${producto.id}`} className="btn btn-primary btn-lg">
                    <FaEdit className="me-2" />
                    Editar Producto
                  </Link>
                  <Link to="/" className="btn btn-outline-secondary btn-lg">
                    <FaHome className="me-2" />
                    Volver al Inicio
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
