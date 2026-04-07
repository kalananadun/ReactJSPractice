import ItemList from './ItemList';
function Content({items,setCheckbox, deleteTheItem}) {
  return (
    <main>
       <ItemList items={items} setCheckbox={setCheckbox} deleteTheItem={deleteTheItem}/>
    </main>

  )
}

export default Content
