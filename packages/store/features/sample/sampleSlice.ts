import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../types";

const initialState = {
    count: 10,
    numberOfUser: 2000,
    isUser: false
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        incrementCounter: (state, action) => {
            state.count = action.payload?.count
        },
        incrementUser: (state, action) => {
            state.numberOfUser = action.payload.user
        },
        toggleUser: (state, _) => {
            state.isUser = !state.isUser
        }
    }
})

export const { incrementCounter, incrementUser, toggleUser } = counterSlice.actions

export default counterSlice.reducer

export const selectNumberOfUser = (state: RootState) => state.counter.numberOfUser
export const selectTotalCount = (state: RootState) => state.counter.count
export const selectIsUser = (state: RootState) => state.counter.isUser