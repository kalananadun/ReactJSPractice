import React from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router'
import { useState, useEffect } from 'react'
import api from '../api/posts'

const PostPage = ({posts,handleDelete}) => {
  const {id} = useParams();
  const [post,setPost]= useState({})
  useEffect(()=>{
    const getPost = async ()=>{
      try {
        // get post and set the post state here
        const response = await api.get(`/posts/${id}`);
        if(response && response.data){
          setPost(response.data);
          console.log(response.data)
        }
        else{
          setPost({});
        }
      } catch (error) {
        console.log(error);
      }
    }
    (async ()=> await getPost())();
  },[])
  return (
   <main className='post-page'>
    {post ? (
      <article>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <button onClick={() => handleDelete(post.id)}>Delete</button>
        <Link to='/'>Back to Home</Link>
        {console.log(post)}
      </article>
    ) : (
      <h1>Not Found</h1>
    )}
  </main>
  )
}

export default PostPage
