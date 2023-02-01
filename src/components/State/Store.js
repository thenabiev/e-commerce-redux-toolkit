import { configureStore } from "@reduxjs/toolkit";
import CheckoutReducer from './Slice/CheckoutSlice';
import CartReducer from './Slice/СartSlice';
import LangReducer from './Slice/LangSlice';

export const store=configureStore({
    reducer:{
        checkout: CheckoutReducer,
        cart: CartReducer,
        lang: LangReducer
    }
})