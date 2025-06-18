import {createSlice , createAsyncThunk} from '@reduxjs/toolkit';

//Llamado a la API 
export const fetchProductos = createAsyncThunk ('productos/fetchProductos', async () => {
    const res = await fetch ('https://fakestoreapi.com/products');
    const data = await res.json();
    return data.map(prod => ({
        id: prod.id ,
        nombre: prod.title,
        precio: prod.price,
        imagen: prod.image,
        categoria: prod.category,
        descripcion: prod.description,
    }));
});

const productsSlice = createSlice ({
    name: 'productos',
    initialState: {
        lista:[],
        favoritos: [],
    },
    reducers:{
      //agregar agregar,editarproducto
      agregarProducto: (state, action) => {
      state.lista.push({ ...action.payload, id: Date.now() });
    },
    editarProducto: (state, action) => {
      const prodEditado = action.payload;
      const index = state.lista.findIndex(p => p.id === prodEditado.id);
      if (index !== -1) {
        state.lista[index] = prodEditado;
      }
    }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProductos.fulfilled , (state , action)=> {
            state.lista = action.payload;
        });
    }

});
export const { agregarProducto, editarProducto } = productsSlice.actions;
export default productsSlice.reducer;