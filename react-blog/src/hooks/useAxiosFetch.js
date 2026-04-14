import {useState, useEffect} from 'react';
import axios from 'axios';

const useAxiosFetch  = (dataurl)=>{
// custom hook to fetch data from the backend using axios
    const [data, setData] = useState([]);
    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(()=>{
        let isMounted = true;
        const source = axios.CancelToken.source();
        const fetchData = async (url)=>{
            console.log("isloading in the useAxiosFetch hook :", isLoading);
            
            try {
                const response = await axios.get(url, {
                    cancelToken: source.token
                });
                if(isMounted){
                    setData(response.data);
                    setFetchError(null);
                }
            } catch (err) {
                if(isMounted){
                    setFetchError(err.message);
                    setData([]);
                }
            } finally{
                setTimeout(()=>{
                    isMounted && setIsLoading(false);
                },5000)

            }
        }
        fetchData(dataurl);
        return ()=>{
            isMounted = true;
            source.cancel();
        }       
    },[])
    return {data, fetchError, isLoading};
}

export default useAxiosFetch;