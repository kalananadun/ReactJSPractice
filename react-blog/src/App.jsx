import React, { use } from 'react'
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
import { Route, Routes,useNavigate } from 'react-router'
import { useState, useEffect } from 'react'
import api from './api/posts'
import useAxiosFetch from './hooks/useAxiosFetch'
import { DataProvider } from './context/DataContext.jsx'
const App = () => {
  
  
  return (
    <div>
      <DataProvider>
        <Routes>
          
          <Route path="/" element={<MainLayout/>} >
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="post">
              <Route index element={<NewPost />} />
              <Route path=":id" element={<PostPage />} />
            </Route>
          </Route>
          <Route path="*" element={<Missing />} />
          
        </Routes>
      </DataProvider>
    </div>
  )
}

export default App
