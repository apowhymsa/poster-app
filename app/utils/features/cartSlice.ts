import {createSlice} from "@reduxjs/toolkit";

interface ICart {
    cart: any[]
}
const initialState: ICart = {
    cart: []
}
export const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        setCartItem: (state, action) => {
            state.cart.push(action.payload);
        },
        clearCart: (state) => {
            state.cart = [];
        },
        updateItem: (state, action) => {
            const productIndex = state.cart.findIndex((product) => product.product_object.product_id === action.payload.product_id);
            state.cart[productIndex].quantity = action.payload.quantity;
        }
    }
})

export default cartSlice.reducer;
export const {setCartItem, clearCart, updateItem} = cartSlice.actions;