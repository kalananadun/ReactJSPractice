import {  useDispatch,  useSelector } from "react-redux";
import type {TypedUseSelectorHook} from "react-redux";
import type { AppDispatch, RootState } from "./store";
export const useAppDispatch = ()=>{
    return useDispatch<AppDispatch>()
}
/*
 here the useAppDispatch is a custom hook that is created to provide the correct type for the dispatch function. By using useAppDispatch, we can ensure that the dispatch function is of the correct type and avoid any type errors in our code. This is especially useful when working with complex actions or when using TypeScript to enforce type safety in our application.
*/
export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector;
/*
useSelector is a function and aliasing it to useAppSelector allows us to specify the type of the state that we are selecting from the store. By using useAppSelector, we can ensure that the state we are selecting is of the correct type and avoid any type errors in our code. This is especially useful when working with complex state structures or when using TypeScript to enforce type safety in our application.
*/
