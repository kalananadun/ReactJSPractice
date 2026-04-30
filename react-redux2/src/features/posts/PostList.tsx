import React from 'react'

const PostList = () => {
    const posts = {posts:[{
        id:1,title:"First Post",content:"This is the first post"
    },
    {id:2,title:"Second Post",content:"This is the second post"
    },
    {
        id:3,title:"Third Post",content:"This is the third post"
    }
]}
  return (
    <div>
    {
        posts.posts.map((post)=>{
            return (<div key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.content}</p>
            </div>)
        })
    }  
    </div>
  )
}

export default PostList
