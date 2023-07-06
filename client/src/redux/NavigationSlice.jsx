import { createSlice } from "@reduxjs/toolkit";

// const navigate = JSON.parse(localStorage.getItem('sidebar'))
export const navigationSlice = createSlice({
    name: "sidebar",

    initialState: {
        bar: 'profile',

    },
    reducers: {
        profile: (state, action) => {  
            state.bar = action.payload;
            localStorage.setItem('sidebar', JSON.stringify(state))
        },
        addTodo: (state, action) => {  
            state.bar = action.payload;
            localStorage.setItem('sidebar', JSON.stringify(state))
        },
        viewTodo: (state, action) => {  
            state.bar = action.payload;
            localStorage.setItem('sidebar', JSON.stringify(state))
        }
     
    }
});

// Export the actions to be used in the components
export const { profile, addTodo, viewTodo } = navigationSlice.actions; 
export const selectUser = (state) => state.sidebar;
//Export the reducer to be used in the store
export default navigationSlice.reducer; 

