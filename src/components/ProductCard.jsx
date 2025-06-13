import React, { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import '../css/ProductCard.css'
const ProductCard = ({ producto }) => {
  const [favorito, setFavorito] = useState(false);

  const toggleFavorito = () => {
    setFavorito(!favorito);
  };

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
            onClick={toggleFavorito}
            className='ms-2'
            style={{ cursor: 'pointer', color: favorito ? 'red' : 'gray' }}
          >
            {favorito ? <FaHeart /> : <FaRegHeart />}
          </span>
        </h5>
        <p className="card-text text-muted mb-1">{producto.categoria}</p>
        <p className="fw-bold mb-3">${producto.precio}</p>
        <button className="btn btn-outline-primary mt-auto">Ver más detalles</button>
      </div>
    </div>
  );
};

export default ProductCard;