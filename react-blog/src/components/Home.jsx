import React from 'react'
import Feed from './Feed'
import DataContext from '../context/DataContext'
import { useContext } from 'react'
const Home = () => {
  const {posts, searchResult, isLoading, fetchError} = useContext(DataContext);
  return (
    <main style={{ height: '300px' }}>
      {isLoading && <p>Loading...</p>}
      {fetchError && <p style={{color:'red'}}>{fetchError}</p>}
      {console.log(`Fetch Erorr : ${fetchError}`)}
      {(!isLoading && !fetchError )&&
      <>
      {
        searchResult.length > 0 ? <Feed posts={searchResult} /> : (
          posts.length > 0 ? <Feed posts={posts} /> : <p style={{ textAlign: 'center' }}>No Posts to Display</p>
        )
      }
      </>}
      {console.log(` isLoading : ${isLoading}`)}
      
    </main>
  )
}

export default Home