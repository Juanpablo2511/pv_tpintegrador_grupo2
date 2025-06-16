import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store.jsx'
import { FavoritesProvider } from './context/FavoritesContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <FavoritesProvider>
          <App />
        </FavoritesProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);