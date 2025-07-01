import { Link, useLocation, useNavigate} from 'react-router-dom'
import {useState} from 'react';
import { FaSearch } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../userSlice'


export default function Navbar() {
  const [searchTerm,setSearchTerm]= useState("");
  const navigate= useNavigate();
  const location = useLocation();
  
  const dispatch =useDispatch();
  const user = useSelector(state => state.user.user);

  const handleSubmit = (e)=> {
    e.preventDefault();
    const term= searchTerm.trim();
    if(term !== ""){
      navigate(`/?search=${encodeURIComponent(term)}`);
      setSearchTerm("");
    }
  }



  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  }


  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-4">
      <div className="container-fluid">
        {/* Logo */}
        <Link className="navbar-brand fw-bold" to="/">
          🛒 TechStore
        </Link>

        {/* Botón despegable */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* Menú colapsable */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link 
                className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} 
                to="/"
              >
                🏠 Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${location.pathname === '/favoritos' ? 'active' : ''}`} 
                to="/favoritos"
              >
                ❤️ Favoritos
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${location.pathname === '/crear' ? 'active' : ''}`} 
                to="/crear"
              >
                ➕ Crear Producto
              </Link>
            </li>
          </ul>

          {/* //Buscador */}
          <form className="d-flex" onSubmit={handleSubmit}>
            <div className="input-group">
              <input type="search" className="form-control" placeholder='Buscar productos...' value={searchTerm} onChange={(e)=> setSearchTerm(e.target.value)} />
              <button className='btn btn-light border' type="submit">
                <FaSearch color='#6c757d' />
              </button>
            </div>
          </form>

          {user && (
            <div>
              <span className="text-white mb-0">
                Bienvenido, <strong>{user.email}</strong>
              </span>
              <button onClick={handleLogout} className="btn btn-sm btn-danger">Cerrar sesion</button>
            </div>
          )}

        </div>
      </div>
    </nav>
  );
}