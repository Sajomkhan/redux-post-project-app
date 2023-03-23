import { configureStore } from "@reduxjs/toolkit";
import postReducer from '../features/posts/postsSlice'
import usersReducer from '../features/users/usersSlice'

export const store = configureStore({
    reducer: {
        postReducer: postReducer,
        usersReducer: usersReducer
    }
})
