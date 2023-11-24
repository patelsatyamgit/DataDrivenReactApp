import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";


const initialState={
    data:[]
}

const dataSlice = createSlice({
    name:"data",
    initialState:initialState,
    reducers:{
        setData:(state,action)=>{
                state.data=action.payload;
        },
    },
})

export const {setData} =dataSlice.actions;
export default dataSlice.reducer;