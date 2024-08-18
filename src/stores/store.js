import { configureStore } from "@reduxjs/toolkit";
import cartDropdownReducer from "../features/cart/cartDropdownSlice";
import cartItemsReducer from "../features/cart/cartItems";
import shopDataReducer from '../features/shopData'

export default configureStore({
  reducer: {
    cartDropdown: cartDropdownReducer,
    cartItems: cartItemsReducer,
    shopData: shopDataReducer,
  }
})