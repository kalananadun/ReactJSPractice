import { FaTrashAlt } from 'react-icons/fa';
const ItemList = ({items, setCheckbox, deleteTheItem}) => {
  return (
    <div>
      <ul>
        {items.map((item)=>{
            return <li className='item' key={item.id}>
                    <input type="checkbox" name={item.id} id={item.id} checked={item.isChecked} onChange={()=>setCheckbox(item.id)}/>
                    <label htmlFor={item.id}>{item.name}</label>
                    <FaTrashAlt style={{color: "red", marginLeft: "10px"}} onClick={()=>deleteTheItem(item.id)}/>
                 </li>
        })}
       </ul>
    </div>
  )
}

export default ItemList
