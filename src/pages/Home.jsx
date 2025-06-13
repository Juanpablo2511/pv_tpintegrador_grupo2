import React, { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';
import heladeraImg from '../img/heladera.jpg';
import microondasImg from '../img/microondas.jpg';
import licuadoraImg from '../img/licuadora.jpg';
const Home = () => {
  const [productos, setProductos] = useState([]); 

  useEffect(() => {
    
    const productosPrincipales = [
      {
        id: 1,
        nombre: 'Heladera',
        precio: 120000,
        imagen: heladeraImg ,
        categoria: 'Frío',
        descripcion: 'Heladera con freezer '
      },
      {
        id: 2,
        nombre: 'Microondas',
        precio: 45000,
        imagen: microondasImg,
        categoria: 'Cocina',
        descripcion: 'Microondas digital 25L '
      },
      {
        id: 3,
        nombre: 'Licuadora Philips',
        precio: 54999,
        imagen: licuadoraImg,
        categoria: 'Cocina',
        descripcion: 'Licuadora potente de 800W con cuchillas ProBlend para mezclas más suaves y rápidas',
      },
    ];
    setProductos(productosPrincipales);
  }, []);

  return (
    <div>
      <h1 className="text-center my-4">Catálogo de Productos</h1>
      <ProductList productos={productos} />
    </div>
  );
  
}
export default Home;