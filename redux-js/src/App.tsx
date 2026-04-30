import { useState } from "react";
import {useAppDispatch, useAppSelector} from "./app/hooks.ts"
//import { authTest } from "./features/authentication/authSlice.ts";
import { decrement,  incremented, reset} from "./features/counterSlice/counterSlice.ts"
import { authentication , authReset} from "./features/authentication/authSlice.ts";
import { changeBackgoundColor } from "./features/backgroundcolor/backgroundColorSlice.ts";
const App = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state)=>state.counter.value)

  const handleClickIncrement = ()=>{
    dispatch(incremented());
  }
  const handleClickDecrement =()=>{
    dispatch(decrement())
  }
  const handleReset = ()=>{
    dispatch(reset())
  }
  const handleAuthentication = (value:string)=>{
    dispatch(authentication(value))
  }
  const authResetHandler=()=>{
    dispatch(authReset())
  }
  const bgcolor = useAppSelector((state)=>state.backgroundColor.color)
  const handleChangeBackgroundColor =()=>{
    dispatch(changeBackgoundColor())
  }
  const [value, setValue] = useState("");
  
  return (
    <div>

      <h1>Counter Application</h1>
      <h2>Count: {count}</h2>
      <h2 onClick={()=>handleChangeBackgroundColor()}>Background Color: {bgcolor}</h2>
      <button onClick={()=>handleClickIncrement()}>Increment</button>
      <button onClick={()=>handleClickDecrement()} >Decrement</button>
      <button onClick={()=>handleReset()}>reset</button>
      <div>
        <input type="text" name="" id="" onChange={(e)=>{setValue(e.target.value)}} />
        <button onClick={()=>handleAuthentication(value)}>Authenticate</button>
        <button onClick={()=>authResetHandler()}>Deauthenticate</button>
      </div>
    </div>
  )
}

export default App