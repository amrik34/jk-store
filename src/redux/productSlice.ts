import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  category: string;
};

type ProductState = {
  item: Product[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
};

export const fetchProduct = createAsyncThunk(
  "products",
  async (category?: string) => {
    const url = category
      ? `https://dummyjson.com/products/category/${category}`
      : "https://dummyjson.com/products";
    const resp = await fetch(url);
    const jsonResp = await resp.json();
    return jsonResp.products;
  },
);

const initialState: ProductState = {
  item: [],
  status: "idle",
  error: null,
};
const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchProduct.fulfilled, (state, actions) => {
      state.status = "succeeded";
      state.item = actions.payload;
    });
    builder.addCase(fetchProduct.rejected, (state, actions) => {
      state.status = "failed";
      state.error = actions.error.message ?? "Failed to load products";
    });
  },
});

export default productSlice.reducer;
