import { createSlice } from "@reduxjs/toolkit"

const initialState={
    isOpen: false
};

const CheckoutSlice=createSlice({
    name:'checkout',
    initialState,
    reducers:{
        open: (state)=>{state.isOpen=!state.isOpen}
    }
})

export const {open}=CheckoutSlice.actions;
export default CheckoutSlice.reducer;