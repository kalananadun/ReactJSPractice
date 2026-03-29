import React from 'react'
import ColorBox from './components/ColorBox'
import AddColor from './components/AddColor'
import { useState } from 'react'
const App = () => {
  const [color, setColor] = useState("blue");

  return (
    <div className="App">
      <ColorBox color={color}></ColorBox>
      <AddColor color={color} setColor={setColor}></AddColor>
    </div>
  )
}

export default App
