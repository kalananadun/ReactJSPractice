import {useState, useEffect, createContext} from 'react'
import useWindowSize from '../hooks/useWindowSize';
import { useNavigate } from 'react-router';
import api from '../api/posts'
import useAxiosFetch from '../hooks/useAxiosFetch'

const DataContext = createContext({});


export const DataProvider = ({children})=>{
    const {width} = useWindowSize();
    const navigate = useNavigate();
  const handleDelete = (id) => {
    // delete the post with the given id
   try {
    // using the api call to delete the post from the backend
        const postId = parseInt(id);
        const response = api.delete(`/posts/${postId}`);
        console.log(response.data);
        
   } catch (error) {
    console.log(error)
   }
  }
  
  const [search, setSearch] = useState('')
  const [searchResult,setSearchResult] = useState([]);
  const [posts, setPosts] = useState([]);
  const [postObj,setPostObj] = useState({
    title:'',
    body:''
  });

  const {data, fetchError, isLoading} = useAxiosFetch("http://localhost:3000/posts");
  const submitPost=(e)=>{
    console.log("Submit the post");
    // add a new post to the posts array here 
    const id = posts.length ? Number(posts[posts.length - 1].id )+ 1 : 1;
    const datetime = new Date().toLocaleString();
    const newPost = { id, title: postObj.title, datetime, body: postObj.body };
    const allPosts = [...posts, newPost];
    const response = api.post('/posts', newPost);
    setPosts(allPosts);
    setPostObj({ title: '', body: '' });
     navigate('/');
  }
  useEffect(()=>{
    setPosts(data);
  },[data])
{console.log(`Data : ${data}`);
}
 
  useEffect(()=>{
    // new data for the search result 
    const filteredResults = posts.filter((post) => post.body.toLowerCase().includes(search.toLowerCase()) || post.title.toLowerCase().includes(search.toLowerCase()));
    setSearchResult(filteredResults.reverse());
    setSearchResult(filteredResults);
    
  },[posts,search])
    return (
        <DataContext.Provider value={{width, search, setSearch, searchResult, handleDelete, submitPost, posts, postObj, setPostObj}}>
            {children}
        </DataContext.Provider>
    )
}
export default DataContext;