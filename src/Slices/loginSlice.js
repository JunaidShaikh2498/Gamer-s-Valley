import { createSlice } from "@reduxjs/toolkit"

export const loggedSlice = createSlice({
    name: 'logged',
    initialState: {
        loggedIn: false,
    },
    reducers:{
        login:()=>{
            return {loggedIn:true}
        },
        logout:()=>{return{loggedIn:false}}
    }
})
export const {login} = loggedSlice.actions;
export const {logout} = loggedSlice.actions;

export default loggedSlice.reducer;