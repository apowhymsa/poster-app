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
            const productIndex = state.cart.findIndex(product => product.product_object.product_id === action.payload.product_object.product_id);

            if (productIndex === -1) {
                state.cart.push(action.payload);
            } else {
                state.cart[productIndex].quantity += action.payload.quantity;
            }
        },
        clearCart: (state) => {
            state.cart = [];
        },
        updateItem: (state, action) => {
            const productIndex = state.cart.findIndex((product) => product.product_object.product_id === action.payload.product_id);

            if (action.payload.quantity === 0) {
                state.cart.splice(productIndex, 1);
            } else {
                state.cart[productIndex].quantity = action.payload.quantity;
            }
        }
    }
})

export default cartSlice.reducer;
export const {setCartItem, clearCart, updateItem} = cartSlice.actions;