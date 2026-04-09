import React from 'react'
import { Outlet } from 'react-router'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
const mainLayout = ({search, setSearch,searchResult}) => {
  return (
    <>
    <Header></Header>
    <Nav search={search} setSearch={setSearch} searchResult={searchResult} />
    <Outlet />
    <Footer></Footer>
    </>
  )
}

export default mainLayout
