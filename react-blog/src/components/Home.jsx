import React from 'react'
import Feed from './Feed'

const Home = ({ posts , searchResult}) => {
  return (
    <main style={{ height: '300px' }}>
      {
        searchResult.length > 0 ? <Feed posts={searchResult} /> : (
          posts.length > 0 ? <Feed posts={posts} /> : <p style={{ textAlign: 'center' }}>No Posts to Display</p>
        )
      }
      
    </main>
  )
}

export default Home