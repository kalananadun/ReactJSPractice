import React from 'react'
import './challenge2.css';
import { useState, useEffect } from 'react';

const App = () => {
  const [data, setData] = useState({
  Users: [],
  Posts: [],
  Comments: []
});
  const[dataRender, setDataRender] = useState([]);
  useEffect(() => {
    // get data in to the state here
    const getData = async () => {
      try{
        const users = await fetch("https://jsonplaceholder.typicode.com/users");
        const posts = await fetch("https://jsonplaceholder.typicode.com/posts");
        const comments = await fetch("https://jsonplaceholder.typicode.com/comments");

        if(!users.ok || !posts.ok || !comments.ok) throw Error("Did not receive expected data");

        const usersData = await users.json();
        const postsData = await posts.json();
        const commentsData = await comments.json();

        setData({
          Users: usersData,
          Posts: postsData,
          Comments: commentsData
        }); 
      }
      catch(err){
        console.log(err.message);
      }

    }
    (async () => await getData())();
  }
  , [])
  function onClickUser(e){
    e.preventDefault();
    setDataRender(data?.Users);
    
  }
  function onClickPosts(e){
    e.preventDefault();
    setDataRender(data?.Posts);
  }
  function onClickComments(e){
    e.preventDefault();
    setDataRender(data?.Comments);
  }
  return (
    <>
    <div className='button-set'>
      <button onClick={(e)=>onClickUser(e)}> Users</button>
      <button onClick={(e)=>onClickPosts(e)}>Posts</button>
      <button onClick={(e)=>onClickComments(e)}>Comments</button>
    </div>
    <div className="content">
      {/* content will be rendered here */}
      {dataRender.length > 0 && dataRender.map((item, index) => (
        <div key={index}>
          {Object.entries(item).map(([key, value]) => (
            <p key={key}><strong>{key}:</strong> {typeof value === 'object' ? JSON.stringify(value) : value}</p>
          ))}
        </div>
      ))}
    </div>
    </>
  )
}

export default App
