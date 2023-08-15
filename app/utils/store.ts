import {Action, configureStore, Middleware} from "@reduxjs/toolkit";
import {categoriesSlice} from "./features/categoriesSlice";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

export const store = configureStore({
    reducer: {
        category: categoriesSlice.reducer
    }
});
export const useAppDispatch: () => typeof store.dispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;