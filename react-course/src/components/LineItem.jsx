import { FaTrashAlt } from 'react-icons/fa';

const LineItem = ({  item, setCheckbox, deleteTheItem})=>{
    return (
        <li className='item' key={item.id}>
            <input type="checkbox" name={item.id} id={item.id} checked={item.isChecked} onChange={()=>setCheckbox(item.id)}/>
            <label htmlFor={item.id} className='' style={item.isChecked ? { textDecoration: "line-through" } : {}}>{item.item}</label>
             <FaTrashAlt style={{color: "red", marginLeft: "10px"}} onClick={()=>deleteTheItem(item.id)}/>
        </li>
    )
}

export default LineItem;