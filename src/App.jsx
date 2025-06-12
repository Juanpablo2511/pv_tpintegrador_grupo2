import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import ProductDetail from './pages/ProductDetail'
import CreateEditProduct from './pages/CreateEditProduct'
import NotFound from './pages/NotFound'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favoritos" element={<Favorites />} />
        <Route path="/producto/:id" element={<ProductDetail />} />
        <Route path="/crear" element={<CreateEditProduct />} />
        <Route path="/editar/:id" element={<CreateEditProduct />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App