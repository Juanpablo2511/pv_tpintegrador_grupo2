import { Link, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../userSlice'
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  //Cierre de sesion
  const dispatch =useDispatch();
  const navigate =useNavigate();
  const user = useSelector(state => state.user.user);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
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
  )
}

