import React from 'react';
import ProductCard from '../components/ProductCard';
import "../css/ProductList.css"

const ProductList = ({ productos }) => {
  return (
    <div className="container py-4 ">
        <img
        src={producto.imagen}
        className="card-producto-img"
        alt={producto.nombre}
      />
      <div className="row g-4">
        {productos.map(producto => (
          <div className="col-12  col-sm-6 col-md-4 col-lg-3 mb-4" key={producto.id}>
            <ProductCard producto={producto} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;