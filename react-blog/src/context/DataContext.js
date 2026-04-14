import { createContext } from "react";

const DataContext = createContext({});


export const dataProvider =({children})=>{
    <DataContext.Provider value={{}}>
        {children}
    </DataContext.Provider>


}

export default DataContext;