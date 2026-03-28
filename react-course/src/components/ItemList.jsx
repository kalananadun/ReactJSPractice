import LineItem from './LineItem';
const ItemList = ({items, setCheckbox, deleteTheItem}) => {
  return (
    <div>
      <ul>
        {items.map((item)=>{
          return (
            <LineItem key={item.id}
              item={item} 
              setCheckbox={setCheckbox} 
              deleteTheItem={deleteTheItem} 
            />
          )
        })}
       </ul>
    </div>
  )
}

export default ItemList
