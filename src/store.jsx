import { configureStore } from '@reduxjs/toolkit';
import productosReducer from './productsSlice.jsx';

export const store = configureStore ({
    reducer:{
        productos: productosReducer
    },
});