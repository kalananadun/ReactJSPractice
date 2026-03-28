import ItemList from './ItemList';
import AddItem from './AddItem';
function Content({items,setCheckbox, deleteTheItem}) {
  return (
    <main>
       <ItemList items={items} setCheckbox={setCheckbox} deleteTheItem={deleteTheItem}/>
    </main>

  )
}

export default Content
