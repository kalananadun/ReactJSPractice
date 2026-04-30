import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface authState{
    id:number,
    name:string,
    email:string,
    level: number,
    jwt:string

}

const initialState : authState={
    id:-1,
    name:"",
    email:"",
    level:-1,
    jwt:""
}

const authSlice = createSlice({
    name:"auth-slice",
    initialState,
    reducers:{
        authTest:(state, )=>{
            state.id=1
        },
        authentication:(state,action:PayloadAction<string>)=>{
            state.email =action.payload
        },
        authReset :(state)=>{
            state.email="2x"
        }

    }
})

export const {authTest,authentication,authReset} = authSlice.actions;
export default authSlice.reducer;
