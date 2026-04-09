import React from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router'
const PostPage = ({posts,handleDelete}) => {
  const {id} = useParams();
  const post = posts.find((post)=> post.id == parseInt(id));

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
