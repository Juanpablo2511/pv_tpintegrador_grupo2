import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductos } from '../productsSlice';
import ProductCardFavoritos from '../components/ProductCardFavoritos';

export default function Home() {
  const dispatch = useDispatch();
  const productos = useSelector(state => state.productos.lista);

  const [criterioOrden, setCriterioOrden] = useState('precio'); // 'precio' o 'nombre'
  const [ordenAscendente, setOrdenAscendente] = useState(true); // true = ascendente

  useEffect(() => {
    if (productos.length === 0) {
      dispatch(fetchProductos());
    }
  }, [dispatch, productos.length]);

  // Ordenar productos según el criterio y la dirección
  const productosOrdenados = [...productos].sort((a, b) => {
    if (criterioOrden === 'precio') {
      return ordenAscendente ? a.precio - b.precio : b.precio - a.precio;
    } else if (criterioOrden === 'nombre') {
      return ordenAscendente
        ? a.nombre.localeCompare(b.nombre)
        : b.nombre.localeCompare(a.nombre);
    }
    return 0;
  });

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="m-0">Catálogo de Productos</h1>

        <div className="d-flex gap-2">
          <select
            className="form-select"
            value={criterioOrden}
            onChange={(e) => setCriterioOrden(e.target.value)}
          >
            <option value="precio">Ordenar por precio</option>
            <option value="nombre">Ordenar por nombre</option>
          </select>

          <button
            className="btn btn-outline-primary"
            onClick={() => setOrdenAscendente(!ordenAscendente)}
          >
            {ordenAscendente ? 'Ascendente 🔼' : 'Descendente 🔽'}
          </button>
        </div>
      </div>

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {productosOrdenados.map(producto => (
          <div className="col" key={producto.id}>
            <ProductCardFavoritos producto={producto} />
          </div>
        ))}
      </div>
    </div>
  );
}