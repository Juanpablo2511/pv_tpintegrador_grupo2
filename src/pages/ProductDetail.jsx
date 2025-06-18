import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProductDetail = () => {
  const { id } = useParams();
  const producto = useSelector(state =>
    state.productos.lista.find(p => p.id === parseInt(id))
  );

  if (!producto) {
    return <div className="container mt-5">Producto no encontrado.</div>;
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-5 d-flex justify-content-center align-items-center">
          <img
            src={producto.imagen}
            alt={producto.nombre}
            className="img-fluid rounded"
            style={{ maxHeight: '300px', objectFit: 'contain' }}
          />
        </div>
        <div className="col-md-7">
          <h2>{producto.nombre}</h2>
          <p className="text-muted">Categoría: {producto.categoria}</p>
          <h4 className="text-success mb-3">${producto.precio}</h4>
          <p>{producto.descripcion}</p>

          <div className="mt-4 d-flex gap-2">
            <Link to={`/editar/${producto.id}`} className="btn btn-warning">
              Editar Producto
            </Link>
            <Link to="/" className="btn btn-secondary">
              Volver al inicio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

/*const ProductDetail = () => {
   return <h1>Detallesde producto </h1>
}

export default ProductDetail*/