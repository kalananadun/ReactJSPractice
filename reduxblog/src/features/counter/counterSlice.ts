import { createSlice } from "@reduxjs/toolkit";

interface counter{
    count : number
}

const initialState : counter={
    count :0,

}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers:{
        // here is the function for all of the execution logics 
        reset: ()=>{null},
        increment : ()=>{null},
        decrement : ()=>{null}

    }
})

export default counterSlice;
export {}
