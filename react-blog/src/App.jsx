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
const App = () => {
  const navigate = useNavigate();
  const handleDelete = (id) => {
    // delete the post with the given id
    const updatedPosts = posts.filter((post) => post.id !== id);
    setPosts(updatedPosts);
    navigate('/');
  }
  
  const [search, setSearch] = useState('')
  const [searchResult,setSearchResult] = useState([]);
  const [posts, setPosts] = useState([]);
  const [postObj,setPostObj] = useState({
    title:'',
    body:''
  });
  const submitPost=(e)=>{
    console.log("Submit the post");
    // add a new post to the posts array here 
    const id = posts.length ? Number(posts[posts.length - 1].id + 1) : 1;
    const datetime = new Date().toLocaleString();
    const newPost = { id, title: postObj.title, datetime, body: postObj.body };
    const allPosts = [...posts, newPost];
    setPosts(allPosts);
    setPostObj({ title: '', body: '' });
     navigate('/');
  }
  useEffect(()=>{
    const getPosts = async ()=>{
      try{
        const response = await api.get("/posts");
      console.log("hello world");
      console.log(response.data);
      if(response && response.data){
        setPosts(response.data);
        
      }
      else{
        setPosts([]);
        
      }

    }
    catch(err){
      console.log(`Error: ${err.message}`);
    }
    }

    (async ()=> await getPosts())();
  },[])
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
          <Route path="/" element={<MainLayout search={search} setSearch={setSearch} searchResult={searchResult} />} >
            <Route index element={<Home posts ={posts} searchResult={searchResult} />} />
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
