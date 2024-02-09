import { configureStore } from "@reduxjs/toolkit";
import loggedReducer from './Slices/loginSlice'


const store = configureStore({
    reducer:{
        logged:loggedReducer
    }
});

export default store