import { createSlice } from "@reduxjs/toolkit"

export const loggedSlice = createSlice({
    name: 'logged',
    initialState: {
        loggedIn: false,
        role:-1
    },
    reducers:{
        login:()=>{
            return {loggedIn:true}
        },
        logout:()=>{return{loggedIn:false}},
        loginCustomer:(state)=>{return state.role=2},
        loginExpert:(state)=>{return state.role=3}
    }
})
export const {login} = loggedSlice.actions;
export const {logout} = loggedSlice.actions;
export const {loginCustomer} = loggedSlice.actions;
export const {loginExpert} = loggedSlice.actions;

export default loggedSlice.reducer;