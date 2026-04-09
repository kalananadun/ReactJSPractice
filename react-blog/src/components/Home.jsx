import React from 'react'
import Feed from './Feed'

const Home = ({ posts }) => {
  return (
    <main style={{ height: '300px' }}>
      {
        posts.length
          ? <Feed posts={posts} />
          : <p style={{ marginTop: '2rem' }}>No posts to display.</p>
      }
      
    </main>
  )
}

export default Home