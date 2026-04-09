import React from 'react'
import { Outlet } from 'react-router'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
const mainLayout = () => {
  return (
    <>
    <Header></Header>
    <Nav></Nav>
    <Outlet />
    <Footer></Footer>
    </>
  )
}

export default mainLayout
