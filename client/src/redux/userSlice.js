import { createSlice } from "@reduxjs/toolkit";

const storedUser = JSON.parse(localStorage.getItem('user'))
export const userSlice = createSlice({
    name: "user",

    initialState: storedUser || {
        userName: null,
        userToken: null,
    },
    reducers: {
        login: (state, action) => {  
            const {username, token} = action.payload
            state.userName = username;
            state.userToken = token;
            localStorage.setItem('user', JSON.stringify(state))
        },
        logout: (state) => {
            state.userName = null;
            state.userToken = null;
            localStorage.removeItem('user')
        },  
    }
});

// Export the actions to be used in the components
export const { login, logout } = userSlice.actions; 
export const selectUser = (state) => state.user;
//Export the reducer to be used in the store
export default userSlice.reducer; 

