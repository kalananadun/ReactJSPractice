import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import { useEffect } from 'react';
import { useState } from 'react';
import AddItem from './components/AddItem';
import SearchItem from './components/SearchItem';
import { postItem } from '../functions/postItem';
import {deleteItem} from '../functions/deleteItem';
import {setCheckBoxItem, unsetCheckBoxItem} from "../functions/setCheckBoxItem";

function App() {

const[item, setItem] = useState(localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : []);
const [search, setSearch] = useState("");

const API_URL= "http://localhost:3000/items";
useEffect(()=>{
  // item changes fetch and load item
  const fetchItems = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw Error("Did not receive expected data");
      const listItems = await response.json();
      setItem(listItems);
    } catch (err) {
      console.log(err.message);
    }
  }

  (async () => await fetchItems())();
  
},[])


function searchItems(){
  // take the serach function here onwards 
  const searchResult = item.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
  setItem(searchResult);
}
function setCheckbox(id) {
      const updatedItems = item.map(i => {
        if (i.id === id) {
          return { ...i, isChecked: !i.isChecked };
        }
        return i;
      });

      setItem(updatedItems);
      if(updatedItems.find(i => i.id === id).isChecked){
        (async ()=> await setCheckBoxItem(id))();
      }
      else{
        (async ()=> await unsetCheckBoxItem(id))();
      }
    }
function deleteTheItem(id) {
      const updatedItems = item.filter(item => item.id !== id);

      setItem(updatedItems);
      (async ()=> await deleteItem(id))();
    }
function submitTheItem(e) {
      e.preventDefault();

      const id = item.length ? item[item.length - 1].id + 1 : 1;
      const name = e.target.elements.add_item.value;
      const newItem = { id, name, isChecked: false };

      const updatedItems = [...item, newItem];

      setItem(updatedItems);
      /* add to the back end here */
      async ()=> await postItem(newItem)();

      e.target.elements.add_item.value = ""; 
}     

  return (
    <div className="App">
        <Header title={"Grocery List"}></Header>
        <AddItem onSubmitItem={submitTheItem}></AddItem>
        <SearchItem  searchQ={search} setSearch={setSearch}  />
        <Content items={item?.filter((i) =>
  i.item?.toLowerCase().includes(search?.toLowerCase())
) || []} setCheckbox={setCheckbox} deleteTheItem={deleteTheItem} onSubmitItem={submitTheItem}></Content> 

        <Footer length={item.length}></Footer>
    </div>
  )
}

export default App