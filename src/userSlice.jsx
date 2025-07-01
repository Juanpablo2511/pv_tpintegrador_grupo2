import { createSlice } from "@reduxjs/toolkit";

const getSession = () => {
    const storeUser = localStorage.getItem('sessionUser');
    return storeUser ? JSON.parse(storeUser) : null ;

}

const initialState = {
    user: getSession (),
}

const userSlice = createSlice ({
    name: 'user',
    initialState,
    reducers: {
        login: (state , action) => {
            state.user = action.payload;
            localStorage.setItem('sessionUser' , JSON.stringify(action.payload));
        },
        logout: (state) => {
            state.user = null;
            localStorage.removeItem('sessionUser');
        },

    }
})

export const {login,logout } =userSlice.actions;
export default userSlice.reducer;