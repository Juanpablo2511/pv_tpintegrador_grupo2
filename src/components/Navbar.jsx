import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav style={{ padding: '1rem', background: '#f0f0f0' }}>
      <Link to="/">Home</Link> |{' '}
      <Link to="/favoritos">Favoritos</Link> |{' '}
      <Link to="/crear">Crear Producto</Link>
    </nav>
  )
}

export default Navbar