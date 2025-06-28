import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { agregarProducto, editarProducto } from '../productsSlice.jsx';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const campos = [
  { name: 'nombre', label: 'Nombre', type: 'text' },
  { name: 'precio', label: 'Precio', type: 'number' },
  { name: 'categoria', label: 'Categoría', type: 'select' },
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

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación rápida
    const camposIncompletos = Object.values(form).some(valor => valor === '');
    if (camposIncompletos) {
      toast.error('Todos los campos son obligatorios');
      return;
    }

    const productoForm = { ...form, precio: Number(form.precio) };

    if (producto) {
      dispatch(editarProducto(productoForm));
      toast.success('Producto editado correctamente');
    } else {
      dispatch(agregarProducto(productoForm));
      toast.success('Producto creado exitosamente');
    }

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
            ) : type === 'select' ? (
              <select
                name={name}
                value={form[name]}
                onChange={handleChange}
                className="form-select"
                required
              >
                <option value="">Seleccionar categoría</option>
                <option value="men's clothing">Ropa de hombre</option>
                <option value="women's clothing">Ropa de mujer</option>
                <option value="electronics">Electrónica</option>
                <option value="jewelery">Joyería</option>
              </select>
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