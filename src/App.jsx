import { Routes, Route , useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import ProductDetail from './pages/ProductDetail'
import CreateEditProduct from './pages/CreateEditProduct'
import NotFound from './pages/NotFound'
import './App.css';
import PrivateRoute from './routes/PrivateRoute'
import PublicRoute from './routes/PublicRoute'
import Register from './pages/Register'
import Login from './pages/Login'

function App() {
  const location = useLocation();
  const hideNavbarRoutes = [ '/login' , '/register'];
  return (
    <div className='app-container'>
      { !hideNavbarRoutes.includes(location.pathname) && <Navbar />}
      <main className='flex-glow-1'>
        <Routes>
          {/* //RUTAS PUBLICAS */}
         <Route path="/register" element={<PublicRoute> <Register /> </PublicRoute>} />
         <Route path="/login" element={ <PublicRoute> <Login /> </PublicRoute>} />
         {/* //RUTAS PRIVADAS */}
         <Route path="/" element={ <PrivateRoute> <Home /> </PrivateRoute>} />
         <Route path="/favoritos" element={ <PrivateRoute> <Favorites /> </PrivateRoute>} />
         <Route path="/producto/:id" element={ <PrivateRoute> <ProductDetail /> </PrivateRoute>} />
         <Route path="/crear" element={<PrivateRoute> <CreateEditProduct /> </PrivateRoute>} />
         <Route path="/editar/:id" element={<PrivateRoute> <CreateEditProduct /> </PrivateRoute>} />
         <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h5>TechStore</h5>
              <p>Tu tienda de confianza para productos tecnológicos de alta calidad. Ofrecemos la mejor selección de electrónicos, ropa y accesorios con envío rápido y garantía.</p>
            </div>
            <div className="footer-section">
              <h6>Síguenos</h6>
              <div className="social-links">
                <a href="#" className="social-link">📘 Facebook</a>
                <a href="#" className="social-link">📷 Instagram</a>
                <a href="#" className="social-link">🐦 X (Twitter)</a>
                <a href="#" className="social-link">💼 LinkedIn</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <small>&copy; 2025 TechStore - Todos los derechos reservados</small>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App