import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductos } from '../productsSlice';
import ProductCardFavoritos from '../components/ProductCardFavoritos';

export default function Home() {
  const dispatch = useDispatch();
  const productos = useSelector(state => state.productos.lista);

  useEffect(() => {
    if (productos.length === 0) {
      dispatch(fetchProductos());
    }
  }, [dispatch, productos.length]);

  return (
    <div className="container mt-4">
      <h1 className="text-center my-4">Catálogo de Productos</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {productos.map(producto => (
          <div className="col" key={producto.id}>
            <ProductCardFavoritos producto={producto} />
          </div>
        ))}
      </div>
    </div>
  );
}