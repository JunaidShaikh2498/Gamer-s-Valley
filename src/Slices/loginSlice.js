import { createSlice } from "@reduxjs/toolkit"

export const loggedSlice = createSlice({
    name: 'logged',
    initialState: {
        loggedIn: false,
        users:[
            {username:"cust1",password:"pass123"},
            {username:"exp1",password:"pwd123"}
        ]
    },
    reducers:{
        login:(state)=>{return{loggedIn:true}},
        logout:(state)=>{return{loggedIn:false}}
    }
})
export const {login} = loggedSlice.actions;
export const {logout} = loggedSlice.actions;

export default loggedSlice.reducer;