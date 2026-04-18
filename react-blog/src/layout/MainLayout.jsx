import { useContext } from 'react'
import { Outlet } from 'react-router'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import DataContext from '../context/DataContext'
const mainLayout = () => {
  const {search,setSearch, searchResult,width} = useContext(DataContext);
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
