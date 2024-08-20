import { combineReducers, configureStore } from '@reduxjs/toolkit';
import counterReducer from "./sample/sampleSlice"

const rootReducer = combineReducers({
    counter: counterReducer,
    // other reducers can be added here
});

export const store = configureStore({
    reducer: rootReducer
});