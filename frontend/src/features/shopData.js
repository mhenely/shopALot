import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCategories } from "../api/shop";

// Fetch categories (with populated items) and shape them into the grouped
// { title, items } form the UI consumes. Each item gets its category title
// injected so product cards can build navigation routes.
export const fetchShopData = createAsyncThunk('shopData/fetch', async () => {
  const categories = await getCategories()
  return categories.map((category) => ({
    ...category,
    items: category.shopItems.map((item) => ({ ...item, category: category.title })),
  }))
})

const initialState = {
  value: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
}

const shopDataSlice = createSlice({
  name: 'shopData',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchShopData.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(fetchShopData.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.value = action.payload
      })
      .addCase(fetchShopData.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})

export default shopDataSlice.reducer;
