import React from 'react'
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
import { useState } from 'react'
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
  const [posts, setPosts] = useState([
  {
    id: 1,
    title: 'My First Post',
    datetime: 'July 01, 2021 11:17:36 AM',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, ex.'
  },
  {
    id: 2,
    title:"My Second Post",
    datetime: 'July 02, 2021 11:17:36 AM',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, ex.'
  },
  {
    id: 3,
    title:"My Third Post",
    datetime: 'July 03, 2021 11:17:36 AM',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, ex.'
  }
]);
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
  return (
    <div>
      <Routes>
          <Route path="/" element={<MainLayout search={search} setSearch={setSearch} />} >
            <Route index element={<Home posts ={posts}/>} />
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
