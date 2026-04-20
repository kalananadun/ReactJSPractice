// redux typescript 
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import type {AppDispatch, RootState} from "./store";
export const useAppDispatch =()=>{
    return useDispatch<AppDispatch>();  
}
export const useAppSelector  : TypedUseSelectorHook<RootState> = useSelector;