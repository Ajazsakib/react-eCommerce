import { createSlice } from "@reduxjs/toolkit";
import { data } from "../productsData";

const initialState = {
    products: data,
}


const productSilce = createSlice({
    name: "product",
    initialState,
    reducers: {
        addProduct: (state, action) =>
        {
            state.products.unshift(action.payload)
        },
        editAction: (state, action) =>
        {
            console.log("action", action)
            state.products.forEach((product) =>
            {
                if (product.id === action.payload) {
                    product.isEdit = true
                }

            })
        },
        editProduct: (state, action) =>
        {
            console.log("action", action)
            state.products.forEach((product) =>
            {
                if (product.id === action.payload.id) {
                    product[action.payload.name] = action.payload.value;
                }

            })
        },
        editProductCancel: (state, action) =>
        {
            state.products.forEach((product) =>
            {
                if (product.id === action.payload.id) {
                    product.isEdit = false;
                    product.title = action.payload.findCancelEdit.title;
                    product.price = action.payload.findCancelEdit.price;
                    product.description = action.payload.findCancelEdit.description;
                    product.rating = action.payload.findCancelEdit.rating;
                }
            })
        },
        updateProduct: (state, action) =>
        {
            state.products.forEach((product) =>
            {
                if (product.id === action.payload) {
                    product.isEdit = false
                }
            })
        },
        sortByPrice: (state, action) =>
        {
            state.products = action.payload
        },
        removeSorting: (state, action) =>
        {
            state.products = action.payload
        },
        deleteProduct: (state, action) =>
        {
            const updatedProduct = state.products.filter((product) =>
            {
                return product.id !== action.payload
            })

            state.products = updatedProduct
        }
    }
})

export const { addProduct, editProduct, editAction, editProductCancel, updateProduct, sortByPrice, removeSorting, deleteProduct } = productSilce.actions;

export default productSilce.reducer;