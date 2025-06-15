import React, { useEffect } from 'react';
import ProductList from '../components/ProductList'
import { useDispatch ,  useSelector } from 'react-redux';
import { fetchProductos } from '../productsSlice';



export default function Home() {
  const dispatch = useDispatch();
  const productos = useSelector (state => state.productos.lista);

  useEffect(() => {

    if(productos.length === 0) {        //Evita la llamadas innecesarias a la API
      dispatch(fetchProductos ());
    }
  }, [dispatch ,  productos.length]); 

  return (
    <div>
      <h1 className="text-center my-4">Catálogo de Productos</h1>
      <ProductList productos={productos} />
    </div>
  );
  
}
