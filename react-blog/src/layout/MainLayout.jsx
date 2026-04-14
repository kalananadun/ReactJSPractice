import React from 'react'
import { Outlet } from 'react-router'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
const mainLayout = ({search, setSearch,searchResult, width }) => {
  return (
    <main>
      <Header width={width}></Header>
      <Nav search={search} setSearch={setSearch} searchResult={searchResult} />
      <Outlet />
      <Footer></Footer>
    </main>
  )
}

export default mainLayout
