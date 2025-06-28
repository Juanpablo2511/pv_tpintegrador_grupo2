import React from 'react';
import '../css/ProductCard.css'
import { Link } from 'react-router-dom';
import { AiOutlineEye } from "react-icons/ai";
import { CiEdit } from "react-icons/Ci";

const ProductCard = ({ producto }) => {

  return (
    <div className="card card-producto h-100">
      <div className="p-3 d-flex justify-content-center align-items-center" style={{ height: '200px' }}>
        <img
          src={producto.imagen}
          className="card-producto-img"
          alt={producto.nombre}
          style={{ maxHeight: '100%', objectFit: 'contain' }}
        />
      </div>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title d-flex justify-content-between align-items-center">
          {producto.nombre}
        </h5>
        <p className="card-text text-muted mb-1">{producto.categoria}</p>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <p className="fw-bold mb-0">${producto.precio}</p>
          <div className="d-flex gap-2 align-items-center">
            <Link
              to={`/producto/${producto.id}`}
              title="Ver detalles"
              style={{ color: 'green', fontSize: '1.3rem' }}
            >
              <AiOutlineEye />
            </Link>
            <Link
              to={`/editar/${producto.id}`}
              title="Editar producto"
              style={{ color: 'deepskyblue', fontSize: '1.3rem' }}
            >
              <CiEdit />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;