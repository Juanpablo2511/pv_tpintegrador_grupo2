import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import ProductDetail from './pages/ProductDetail'
import CreateEditProduct from './pages/CreateEditProduct'
import NotFound from './pages/NotFound'
import './App.css';

function App() {
  return (
    <div className='app-container'>
      <Navbar />
      <main className='flex-glow-1'>
        <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/favoritos" element={<Favorites />} />
         <Route path="/producto/:id" element={<ProductDetail />} />
         <Route path="/crear" element={<CreateEditProduct />} />
         <Route path="/editar/:id" element={<CreateEditProduct />} />
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