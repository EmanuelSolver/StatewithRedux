import { createSlice } from "@reduxjs/toolkit";

export const navigationSlice = createSlice({
    name: "sidebar",

    initialState: {
        bar: '',

    },
    reducers: {
        profile: (state, action) => {  
            state.bar = action.payload;
            localStorage.setItem('sidebar', JSON.stringify(state.bar))
        },
        addTodo: (state, action) => {  
            state.bar = action.payload;
            localStorage.setItem('sidebar', JSON.stringify(state.bar))
        },
        viewTodo: (state, action) => {  
            state.bar = action.payload;
            localStorage.setItem('sidebar', JSON.stringify(state.bar))
        }
     
    }
});

// Export the actions to be used in the components
export const { profile, addTodo, viewTodo } = navigationSlice.actions; 
export const selectUser = (state) => state.sidebar;
//Export the reducer to be used in the store
export default navigationSlice.reducer; 

