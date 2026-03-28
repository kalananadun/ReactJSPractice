import { FaPlus } from "react-icons/fa6"
const AddItem = ({onSubmitItem}) => {

  return (
    <form >
        <label htmlFor="add_item">Add Item</label>
        <input type="text" id="add_item" />
        <button type="submit" onSubmit={(e)=>onSubmitItem(e)}><FaPlus /></button>
    </form>
  )
}

export default AddItem
