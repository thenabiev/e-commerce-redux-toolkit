import { createSlice } from "@reduxjs/toolkit";

const initialState={
    lang: true
}

const LangSlice=createSlice({
    name: 'lang',
    initialState,
    reducers:{
        change: (state)=>{state.lang=!state.lang}
    }
});


export const {change} = LangSlice.actions;
export default LangSlice.reducer;