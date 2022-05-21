import { configureStore , applyMiddleware } from '@reduxjs/toolkit'
import thunk from "redux-thunk"
import RootReducer from "../store/reducer/RootReducer";

const Store  = configureStore(RootReducer, applyMiddleware(thunk));

export default Store;