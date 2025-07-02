import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ProductDetail from './pages/ProductDetail';
import CreateEditProduct from './pages/CreateEditProduct';
import Favorites from './pages/Favorites';
import NotFound from './pages/NotFound';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';
import './App.css';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
          <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />
          <Route path="/producto/:id" element={<ProductDetail />} />
          <Route path="/crear" element={<PrivateRoute><CreateEditProduct /></PrivateRoute>} />
          <Route path="/editar/:id" element={<PrivateRoute><CreateEditProduct /></PrivateRoute>} />
          <Route path="/favoritos" element={<PrivateRoute><Favorites /></PrivateRoute>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      
      {/* Footer */}
      <footer className="bg-dark text-white py-5 mt-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="d-flex align-items-center mb-3">
                <img src="/logo192.png" alt="TechStore Logo" height="40" className="me-3" />
                <h5 className="mb-0 fw-bold">TechStore</h5>
              </div>
              <p className="text-muted mb-3">
                Tu tienda de confianza para productos tecnológicos de alta calidad al mejor precio.
              </p>
              <div className="d-flex gap-3">
                <a href="#" className="text-white text-decoration-none">
                  <i className="fab fa-facebook fa-lg"></i>
                </a>
                <a href="#" className="text-white text-decoration-none">
                  <i className="fab fa-twitter fa-lg"></i>
                </a>
                <a href="#" className="text-white text-decoration-none">
                  <i className="fab fa-instagram fa-lg"></i>
                </a>
                <a href="#" className="text-white text-decoration-none">
                  <i className="fab fa-linkedin fa-lg"></i>
                </a>
              </div>
            </div>
            
            <div className="col-lg-2 col-md-6">
              <h6 className="fw-bold mb-3">Productos</h6>
              <ul className="list-unstyled">
                <li><a href="#" className="text-muted text-decoration-none">Electrónicos</a></li>
                <li><a href="#" className="text-muted text-decoration-none">Computadoras</a></li>
                <li><a href="#" className="text-muted text-decoration-none">Accesorios</a></li>
                <li><a href="#" className="text-muted text-decoration-none">Gaming</a></li>
              </ul>
            </div>
            
            <div className="col-lg-2 col-md-6">
              <h6 className="fw-bold mb-3">Soporte</h6>
              <ul className="list-unstyled">
                <li><a href="#" className="text-muted text-decoration-none">Centro de Ayuda</a></li>
                <li><a href="#" className="text-muted text-decoration-none">Contacto</a></li>
                <li><a href="#" className="text-muted text-decoration-none">Garantía</a></li>
                <li><a href="#" className="text-muted text-decoration-none">Devoluciones</a></li>
              </ul>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <h6 className="fw-bold mb-3">Newsletter</h6>
              <p className="text-muted mb-3">Suscríbete para recibir ofertas exclusivas</p>
              <div className="input-group">
                <input type="email" className="form-control" placeholder="Tu email" />
                <button className="btn btn-primary" type="button">
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
            </div>
          </div>
          
          <hr className="my-4" />
          
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className="text-muted mb-0">
                © 2024 TechStore. Todos los derechos reservados.
              </p>
            </div>
            <div className="col-md-6 text-md-end">
              <div className="d-flex gap-3 justify-content-md-end">
                <a href="#" className="text-muted text-decoration-none small">Términos</a>
                <a href="#" className="text-muted text-decoration-none small">Privacidad</a>
                <a href="#" className="text-muted text-decoration-none small">Cookies</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;