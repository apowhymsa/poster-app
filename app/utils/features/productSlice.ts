import {createSlice} from "@reduxjs/toolkit";

type Products = {
    products: any[]
}

const initialState: Products = {
    products: []
}

export const productSlice = createSlice({
    name: 'products',
    initialState: initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
        }
    }
})

export default productSlice.reducer
export const {setProducts} = productSlice.actions;