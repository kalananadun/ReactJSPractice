import {createSlice} from "@reduxjs/toolkit";

export interface post {
    id: number;
    title: string;
    content: string;}

interface postState{
    posts: post[];
}

const initialState : postState={
    posts :[{
        id: 1,
        title: "First Post",
        content: "This is the content of the first post."
    },
    {
        id:2,
        title: "Second Post",
        content: "This is the content of the second post."
    },

    {
        id:3,
        title: "Third Post",
        content: "This is the content of the third post."
    }
]
}

// create the post Slicer 

export const postSlicer = createSlice({
    name: "posts",
    initialState,
    reducers :{
        // here are the functions relevant to posts
        addPost :(state,action)=>{
            state.posts.push(action.payload);
        }
    }
})

// export the reducer functions 
export const selectPosts = (state:postState) => state.posts;
export const {addPost} = postSlicer.actions;
export default postSlicer.reducer;
