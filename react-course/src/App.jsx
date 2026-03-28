import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import { useEffect } from 'react';
import { useState } from 'react';
import AddItem from './components/AddItem';
function App() {
  const[item, setItem] = useState(localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : []);
      function setCheckbox(id){
        // here change the check box
        setItem(prevItem=>{
            return prevItem.map(item=>{
                if(item.id === id){
                    return {
                        ...item,
                        isChecked: !item.isChecked
                    }
                }
                return item;
            })
        })
    }
    function deleteTheItem(id){
        setItem(prevItem=>{
            return prevItem.filter(item=>item.id !== id);

        })
      localStorage.setItem("items", JSON.stringify(item));
      }

function submitTheItem(e){
  e.preventDefault();
  // here goes the add item function
  const id = item.length ? item[item.length - 1].id + 1 : 1;
  const name = e.target.elements.add_item.value;
  const newItem = {id, name, isChecked: false};
  setItem(prevItem=>[...prevItem, newItem]);
  console.log(item);
  localStorage.setItem("items", JSON.stringify(item));
  e.target.elements.add_item.value = "";
}      
  return (
    <div className="App">
        <Header title={"Grocery List"}></Header>
        <AddItem onSubmitItem={submitTheItem}></AddItem>
        <Content items={item} setCheckbox={setCheckbox} deleteTheItem={deleteTheItem} onSubmitItem={submitTheItem}></Content> 

        <Footer length={item.length}></Footer>
    </div>
  )
}

export default App
