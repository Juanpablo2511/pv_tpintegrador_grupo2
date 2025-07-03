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
    <div>
      {/* Hero Section */}
      <div className="hero-section text-white text-center py-5 mb-5" style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        borderRadius: '0 0 30px 30px',
        margin: '0 -12px 2rem -12px',
        color: 'white !important'
      }}>
        <div className="container">
          <h1 className="display-4 fw-bold mb-3" style={{color: 'white'}}>Bienvenido a TechStore</h1>
          <p className="lead mb-4" style={{color: 'white'}}>Descubre los mejores productos tecnológicos al mejor precio</p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <div style={{
              background: '#fff',
              color: '#4b3fa7',
              fontWeight: 600,
              borderRadius: '30px',
              padding: '12px 36px',
              boxShadow: '0 2px 12px rgba(75,63,167,0.10)',
              fontSize: '1.1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              border: 'none',
              minWidth: '160px',
              justifyContent: 'center'
            }}>
              <i className="fas fa-shipping-fast me-2"></i>
              Envío Gratis
            </div>
            <div style={{
              background: '#fff',
              color: '#4b3fa7',
              fontWeight: 600,
              borderRadius: '30px',
              padding: '12px 36px',
              boxShadow: '0 2px 12px rgba(75,63,167,0.10)',
              fontSize: '1.1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              border: 'none',
              minWidth: '160px',
              justifyContent: 'center'
            }}>
              <i className="fas fa-shield-alt me-2"></i>
              Garantía
            </div>
            <div style={{
              background: '#fff',
              color: '#4b3fa7',
              fontWeight: 600,
              borderRadius: '30px',
              padding: '12px 36px',
              boxShadow: '0 2px 12px rgba(75,63,167,0.10)',
              fontSize: '1.1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              border: 'none',
              minWidth: '160px',
              justifyContent: 'center'
            }}>
              <i className="fas fa-headset me-2"></i>
              Soporte 24/7
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="m-0">Catálogo de Productos</h2>

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
          <div className="text-center py-5">
            <i className="fas fa-search fa-3x text-muted mb-3"></i>
            <p className="text-muted">No se encontraron productos con "{searchTerm}".</p>
          </div>
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
    </div>
  );
}