import { createSlice } from "@reduxjs/toolkit";


const initialState={
    Carat:null,
}

const cartSlice = createSlice({
    name:"Carat",
    initialState:initialState,
    reducers:{
        setCarat:(state,action)=>{
                state.Carat=action.payload;
        },
    },
})

export const {setCarat} =cartSlice.actions;
export default cartSlice.reducer;