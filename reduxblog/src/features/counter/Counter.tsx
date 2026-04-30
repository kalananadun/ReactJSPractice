import "./counter.css";

// here is the counter demo components

const Counter = () => {
  return (
    <div className="app">
         <div className='counter'>
      <div className="button increment" onClick={()=>null}>
        +
      </div>
        <div className="count">
            {0}
        </div>
        <div className="button decrement"  onClick={()=>null}>
            -
        </div>
       
    </div>
    <div className="reset" onClick={()=>{console.log("Reset")}}>
        reset
    </div>
    </div>
  )


// here is the counter demo components
}

export default Counter
