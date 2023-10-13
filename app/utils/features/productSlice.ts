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
        },
        sortProductByPrice: (state,action) => {
            // if (action.payload.sortType === 0) {
            //     state.products.sort((a, b) => Number(a.price["1"]) - Number(b.price["1"]))
            // } else if (action.payload.sortType === 1){
            //     state.products.sort((a, b) => Number(b.price["1"]) - Number(a.price["1"]))
            // }
        }
    }
})

export default productSlice.reducer
export const {setProducts, sortProductByPrice} = productSlice.actions;