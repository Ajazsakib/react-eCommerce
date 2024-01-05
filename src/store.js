import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./redux/productSlice";
import cartReducer from "./redux/cartSlice";

const store = configureStore({
    reducer: {
        productReducer: productReducer,
        cartReducer: cartReducer,
    }
})

export default store