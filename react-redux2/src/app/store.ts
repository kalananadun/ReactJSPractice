// this is the store .ts file which includes the redux store to get the reducers form the store to entire application 
import { configureStore} from "@reduxjs/toolkit";
import postReducer from "../features/posts/postSlice";
const store = configureStore({
    reducer:{
        // here will wrap all the reducers in the application 
        posts: postReducer
    }
})

