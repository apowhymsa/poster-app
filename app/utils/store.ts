import {Action, configureStore, Middleware} from "@reduxjs/toolkit";
import {categoriesSlice} from "./features/categoriesSlice";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {cartSlice} from "@utils/features/cartSlice";
import {productSlice} from "@utils/features/productSlice";

export const store = configureStore({
    reducer: {
        category: categoriesSlice.reducer,
        cart: cartSlice.reducer,
        product: productSlice.reducer
    }
});
export const useAppDispatch: () => typeof store.dispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;