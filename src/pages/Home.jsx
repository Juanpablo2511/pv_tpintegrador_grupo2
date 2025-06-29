import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductos } from '../productsSlice';
import ProductCardFavoritos from '../components/ProductCardFavoritos';
import { useLocation } from 'react-router-dom';

export default function Home() {
  const dispatch = useDispatch();
  const productos = useSelector(state => state.productos.lista);
  const location=useLocation();

  const [criterioOrden, setCriterioOrden] = useState('precio'); // 'precio' o 'nombre'
  const [ordenAscendente, setOrdenAscendente] = useState(true); // true = ascendente

  const searchParams= new URLSearchParams(location.search);
  const searchTerm = searchParams.get('search')?.toLowerCase() || "";

  useEffect(() => {
    if (productos.length === 0) {
      dispatch(fetchProductos());
    }
  }, [dispatch, productos.length]);

  //ProductosFiltrados
  const productosFiltrados =productos.filter(producto =>
    producto.nombre.toLowerCase().includes(searchTerm) || producto.categoria.toLowerCase().includes(searchTerm)
  )

  // Ordenar productos según el criterio y la dirección
  const productosOrdenados = [...productosFiltrados].sort((a, b) => {
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
      {productosOrdenados.length === 0 ? (
        <p>No se encontraron productos con "{searchTerm}".</p>
      ) : (
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {productosOrdenados.map(producto => (
          <div className="col" key={producto.id}>
            <ProductCardFavoritos producto={producto} />
          </div>
        ))}
      </div>
      )}
    </div>
  );
}