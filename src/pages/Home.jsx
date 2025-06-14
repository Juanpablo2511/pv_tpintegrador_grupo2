import React, { useState, useEffect } from 'react';
import ProductList from '../components/ProductList'
export default function Home() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        const adaptados = data.map(prod => ({
          id: prod.id,
          nombre: prod.title,
          precio: prod.price,
          imagen: prod.image,
          categoria: prod.category
        }));
        setProductos(adaptados);
      })
      .catch(err => console.error(err));
  }, []);


  return (
    <div>
      <h1 className="text-center my-4">Catálogo de Productos</h1>
      <ProductList productos={productos} />
    </div>
  );
  
}
