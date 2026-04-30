// create the PostSlice with reduxjs/toolkit 
import  {createSlice} from "@reduxjs/toolkit";

interface Post{
    id: number;
    title : string;
    content : string 
}

interface PostState{
    posts : Post[]
}

const initialState : PostState={
    posts :[
        {id:1,title:"First Post",content:"This is the first post"},
        {id:2,title:"Second Post",content:"This is the second post"},
        {id:3,title:"Third Post",content:"This is the third post"}
    ]
}

// create the post slice on the application 

const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers:{
    
    }
})


// export const {addPosts}= postSlice.actions;
export default postSlice.reducer;
