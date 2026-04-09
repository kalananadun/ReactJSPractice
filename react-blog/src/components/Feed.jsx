import React from 'react'
import PostItem from './PostItem'
const Feed = ({posts}) => {
  return (
    <>
    {
        posts.map((post)=>{
            return <PostItem key={post.id} post={post} />
        })
    }
    </>
  )
}

export default Feed
