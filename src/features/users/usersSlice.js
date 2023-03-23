import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: '0', name: 'Ajom Khan'},
    {id: '1', name: 'Azman Khan'},
    {id: '2', name: 'Abran Khan'},
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export const selectAllUsers = (state) => state.usersReducer;

export default usersSlice.reducer