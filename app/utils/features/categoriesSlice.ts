import {createSlice} from "@reduxjs/toolkit";

interface CategoryState {
    categories: any[]
}

const initialState: CategoryState = {
    categories: []
}

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState: initialState,
    reducers: {
        setCategories: (state, action) => {
            state.categories = action.payload;
        }
    }
})

export default categoriesSlice.reducer
export const {setCategories} = categoriesSlice.actions;