import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface CounterState{
    value: number 
} // shape of the state of the slice managed by the reducer

const initialState : CounterState= {
    value:400
}
// type of the state 

// define the slice that includes the reducer 
const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers:{
        // this is where we gonna define the different types of logics and updates 
        increment : (state)=>{
            state.value++;   
        },
        amountAdded : (state, action :PayloadAction<number>)=>{
            state.value += action.payload;
        }
    }

})

// redux toolkit has a library called emer and it tracks state 


export const {increment} = counterSlice.actions;  
// this is the action creator for the increment action

export const {amountAdded} = counterSlice.actions;

export default counterSlice.reducer;
