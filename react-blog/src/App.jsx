import React from 'react'
import About from './components/About'
import Header from './components/Header'
import Nav from './components/Nav'
import Homepage from './pages/Homepage'
import Footer from './components/Footer'
import NewPost from './components/NewPost'
import Missing from './components/Missing'
import Home from './components/Home'
import PostPage from './pages/PostPage'
import MainLayout from './layout/MainLayout'
import { Route, Routes, BrowserRouter } from 'react-router'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />} >
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="post">
              <Route index element={<PostPage />} />
              <Route path=":id" element={<NewPost />} />
            </Route>
            
            
          </Route>
          <Route path="*" element={<Missing />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
