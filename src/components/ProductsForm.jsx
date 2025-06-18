import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { agregarProducto, editarProducto } from '../productsSlice.jsx';
import { useNavigate, useParams } from 'react-router-dom';

const campos = [
  { name: 'nombre', label: 'Nombre', type: 'text' },
  { name: 'precio', label: 'Precio', type: 'number' },
  { name: 'categoria', label: 'Categoría', type: 'text' },
  { name: 'descripcion', label: 'Descripción', type: 'textarea' },
  { name: 'imagen', label: 'Imagen (URL)', type: 'text' },
];

const ProductForm = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const producto = useSelector(state =>
    state.productos.lista.find(p => p.id === parseInt(id))
  );

  const [form, setForm] = useState({
    nombre: '', precio: '', categoria: '', descripcion: '', imagen: '',
  });

  useEffect(() => {
    if (producto) setForm(producto);
  }, [producto]);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const productoForm = { ...form, precio: Number(form.precio) };
    producto ? dispatch(editarProducto(productoForm)) : dispatch(agregarProducto(productoForm));
    navigate('/');
  };

  return (
    <div className="container my-4">
      <h2 className="mb-4">{producto ? 'Editar Producto' : 'Crear Producto'}</h2>
      <form onSubmit={handleSubmit}>
        {campos.map(({ name, label, type }) => (
          <div className="mb-3" key={name}>
            <label className="form-label">{label}</label>
            {type === 'textarea' ? (
              <textarea
                name={name}
                className="form-control"
                value={form[name]}
                onChange={handleChange}
                required
                rows={4}
              />
            ) : (
              <input
                type={type}
                name={name}
                className="form-control"
                value={form[name]}
                onChange={handleChange}
                required
              />
            )}
          </div>
        ))}
        <button type="submit" className="btn btn-success">
          {producto ? 'Guardar Cambios' : 'Crear Producto'}
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
