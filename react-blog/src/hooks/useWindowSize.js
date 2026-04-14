import { useState, useEffect } from "react";

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined});

    useEffect(()=>{
        /*
         *
         *
        */
       console.log(" useEffect  of the custom hook ");
        const handleResize = ()=>{
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            })

        }
        handleResize();
        window.addEventListener("resize",handleResize);
        const cleanUp = ()=>{
            console.log(" Runs if the dependency changes  ");
            window.removeEventListener("resize",handleResize);
        }
        return ()=>cleanUp();
        
    },[])

    return windowSize;

}

export default useWindowSize;
