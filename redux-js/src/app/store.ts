// here is the store 
import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "../features/counterSlice/counterSlice.ts"
import AuthReducer from "../features/authentication/authSlice.ts"
import BackgroundColorReducer from "../features/backgroundcolor/backgroundColorSlice.ts"
export const store = configureStore({
    reducer:{

        counter : CounterReducer,
        authentication: AuthReducer,
        backgroundColor: BackgroundColorReducer
    }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
