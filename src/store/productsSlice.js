import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  filteredProducts: [],
  categories: [],
  selectedCategory: null,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
      state.filteredProducts = action.payload;
    },
    setCategories: (state, action) => {
        state.categories = action.payload
    },
    filterByCategory: (state, action) => {
      const category = action.payload
      state.selectedCategory = category;
      state.filteredProducts = category
        ? state.products.filter(
            (product) => product.category === category
          )
        : state.products;
    },
  },
});

export const {setProducts, setCategories, filterByCategory} = productsSlice.actions;

export default productsSlice.reducer;
