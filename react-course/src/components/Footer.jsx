import React from 'react'
const date = new Date();

function Footer({length}) {
  return (
    <footer>
        <p>{length} items</p>
    </footer>
  )
}

export default Footer
