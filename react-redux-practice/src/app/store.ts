import {configureStore} from "@reduxjs/toolkit";
import PostReducer from "../features/post/postSlicer";

export const store = configureStore({
    reducer:{
        posts: PostReducer
    }
})

// 