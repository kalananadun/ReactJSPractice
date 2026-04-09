import React from 'react'
import { Link } from 'react-router'

const PostItem = ({ post }) => {
  return (
    <article>
      <Link to={`/post/${post.id}`}>{post.title}</Link>
    </article>
  )
}

export default PostItem
