feature/buscador
import { Link, useLocation, useNavigate} from 'react-router-dom'
import {useState} from 'react';
import { FaSearch } from 'react-icons/fa';

export default function Navbar() {
  const [searchTerm,setSearchTerm]= useState("");
  const navigate= useNavigate();
  const location = useLocation();

  const handleSubmit = (e)=> {
    e.preventDefault();
    const term= searchTerm.trim();
    if(term !== ""){
      navigate(`/?search=${encodeURIComponent(term)}`);
      setSearchTerm("");
    }
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-4">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/">
          🛒 TechStore
        </Link>

        <div className="collapse navbar-collapse justify-content-end">
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
        </div>
      </div>
    </nav>
  )
}