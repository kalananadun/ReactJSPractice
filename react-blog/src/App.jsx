import React, { use } from 'react'
import About from './components/About'
import Header from './components/Header'
import Nav from './components/Nav'
import Homepage from './pages/Homepage'
import Footer from './components/Footer'
import NewPost from './components/NewPost'
import Missing from './components/Missing'
import Home from './components/Home'
import PostPage from './pages/PostPage'
import MainLayout from './layout/MainLayout'
import { Route, Routes,useNavigate } from 'react-router'
import { useState, useEffect } from 'react'
import api from './api/posts'
import useWindowSize from './hooks/useWindowSize'
import useAxiosFetch from './hooks/useAxiosFetch'
import { dataProvider } from './context/DataContext'
const App = () => {
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
  const {width} = useWindowSize();
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
  {console.log(searchResult)}
  return (
    <div>
      <Routes>
          <Route path="/" element={<MainLayout search={search} setSearch={setSearch} searchResult={searchResult} width={width} />} >
            <Route index element={<Home posts ={posts} searchResult={searchResult} isLoading={isLoading} fetchError={fetchError}/>} />
            <Route path="about" element={<About />} />
            <Route path="post">
              <Route index element={<NewPost postObj={postObj} submitPost={submitPost} setPostObj={setPostObj} />} />
              <Route path=":id" element={<PostPage posts={posts} handleDelete={handleDelete} />} />
            </Route>
          </Route>
          <Route path="*" element={<Missing />} />
        </Routes>
    </div>
  )
}

export default App
