import { configureStore } from '@reduxjs/toolkit';
import productosReducer from './productsSlice.jsx';
import userReducer  from './userSlice.jsx';
export const store = configureStore ({
    reducer:{
        user:userReducer,
        productos: productosReducer
    },
});