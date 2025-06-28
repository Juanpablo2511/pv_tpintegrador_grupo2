import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const location = useLocation();

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
        </div>
      </div>
    </nav>
  )
}

