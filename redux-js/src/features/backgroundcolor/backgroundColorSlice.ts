import { createSlice } from "@reduxjs/toolkit";

interface backgroundColorState{
    color:string
}

const initialState : backgroundColorState={
    color:"white"
}

const backgroundColorSlice = createSlice({
    name:"background-color-slice",
    initialState,
    reducers:{
        changeBackgoundColor :(state)=>{
            state.color = state.color === "white" ? "black" : "white"
        }
    }
})

export const {changeBackgoundColor} = backgroundColorSlice.actions;
export default backgroundColorSlice.reducer;