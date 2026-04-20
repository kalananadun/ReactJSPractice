// easy peasy state management 
import { createStore, action , thunk , computed } from "easy-peasy";
import api from "./api/posts";
const store = createStore({
    posts: [],
    setPosts: action((state, payload) => {
        state.posts = payload;
    }),
    width:0,
    setWidth:action ((state,payload)=>{
        state.width = payload
    }),
    search:"",
    setSearch :action((state,payload)=>{
        state.search = payload
    }  ),
    searchResult :[],
    setSearchResult : action ((state,payload)=>{
        state.searchResult = payload
    }),
    postObj : {
        title:'',
        body:''
    },
    setPostObj: action((state,payload)=>{
        state.postObj = payload
    }),
    



    
})