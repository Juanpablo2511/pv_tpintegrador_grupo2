import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store.jsx'
import { FavoritesProvider } from './context/FavoritesContext.jsx'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <FavoritesProvider>
          <App />
           <ToastContainer position="bottom-right" autoClose={2500} />
        </FavoritesProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);