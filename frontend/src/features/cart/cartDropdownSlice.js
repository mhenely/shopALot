import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  value: false
}

export const cartDropdownSlice = createSlice({
  name: 'cartDropdown',
  initialState,
  reducers: {
    toggleCartOpen: state => {
      state.value = !state.value
    }
  }
})

export const { toggleCartOpen } = cartDropdownSlice.actions

export default cartDropdownSlice.reducer