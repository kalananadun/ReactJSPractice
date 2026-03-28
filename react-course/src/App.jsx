import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import { useEffect } from 'react';
import { useState } from 'react';
import AddItem from './components/AddItem';
function App() {
  const[item, setItem] = useState(localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : []);
function setCheckbox(id) {
      const updatedItems = item.map(i => {
        if (i.id === id) {
          return { ...i, isChecked: !i.isChecked };
        }
        return i;
      });

      setItem(updatedItems);
      localStorage.setItem("items", JSON.stringify(updatedItems));
    }
function deleteTheItem(id) {
      const updatedItems = item.filter(item => item.id !== id);

      setItem(updatedItems);
      localStorage.setItem("items", JSON.stringify(updatedItems));
    }
function submitTheItem(e) {
      e.preventDefault();

      const id = item.length ? item[item.length - 1].id + 1 : 1;
      const name = e.target.elements.add_item.value;
      const newItem = { id, name, isChecked: false };

      const updatedItems = [...item, newItem];

      setItem(updatedItems);
      localStorage.setItem("items", JSON.stringify(updatedItems));

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
