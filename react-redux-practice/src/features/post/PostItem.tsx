import React from 'react';
//import { UseSelector } from 'react-redux';
import type { post } from './postSlicer';
const PostItem = ({post}: {post: post}) => {
  return (
    <article>
        <h2>{post.title}</h2>
        <p>{post.content}</p>
    </article>
  )
}

export default PostItem
