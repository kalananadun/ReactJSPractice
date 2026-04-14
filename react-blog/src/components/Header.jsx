import React from 'react'
import { FaLaptop, FaTablet , FaMobile } from 'react-icons/fa'
const Header = ({ width}) => {
  return (
    <header>
        <h1>Header</h1>
        {width < 768 ? <FaMobile/> : (
          width < 962 ? <FaTablet/> : <FaLaptop/> 
        )}
        {console.log(width)}
    </header>
  )
}

export default Header
