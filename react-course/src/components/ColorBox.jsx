
const ColorBox = ({ color ="blue"}) => {
  return (
    <div style={{ backgroundColor: color ? color : "" }}>
      <div>{color}</div>
    </div>
  )
}


export default ColorBox
