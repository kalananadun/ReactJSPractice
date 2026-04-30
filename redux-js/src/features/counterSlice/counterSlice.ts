import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
    value:number
}

const initialState: CounterState={
    value:0
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers:{
        // increment by 1 
        incremented : (state)=>{
            state.value++;
        },
        decrement :(state)=>{
            state.value--;
        },
        reset:(state)=>{
            state.value=0
        }
        ,
        amountAdded : (state, action : PayloadAction<number>)=>{
                        state.value +=action.payload;
                        }
        /*
        Here used the PayloadAction and the type of number 
        action type : PayloadAction<number>
        */
       // explain how this works : action : PayloadAction<number> -> prompt 

        
    },

    });

export const {incremented,decrement,reset} = counterSlice.actions;
export default counterSlice.reducer;
