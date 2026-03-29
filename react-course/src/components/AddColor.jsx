import React from 'react'

const AddColor = ({color,setColor}) => {
  return (
    <form>
        <input type="text" name='color' placeholder='Enter the color name' value={color} onChange={e=>setColor(e.target.value)}></input>
    </form>
  )
}

export default AddColor
