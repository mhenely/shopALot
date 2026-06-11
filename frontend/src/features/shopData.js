import { createSlice } from "@reduxjs/toolkit";
import SHOP_DATA from "../utils/shop-data";

const initialState = {
  value: SHOP_DATA
}

const shopDataSlice = createSlice({
  name: 'shopData',
  initialState,
  reducers: {
    getAllData: (state) => {
      console.log('good job')
    }
  }
})


const {getAllData } = shopDataSlice.actions;

export default shopDataSlice.reducer;