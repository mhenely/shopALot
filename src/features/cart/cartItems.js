import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
}

export const cartItemsSlice = createSlice({
  name: 'cartItems',
  initialState,
  reducers: {
    incrementItems: (state, action) => {

      const { name, price, imageUrl, id, category } = action.payload; 

      // check if item already in cart
      const existingItem = state.items.find(item => item.id === id)
        // if so, increment by 1
      if (existingItem) {
        state.items = state.items.map(item => {
          if (item.name === name) {
            // return {...item, quantity: item.quantity + 1}
            const newItem = {...item, quantity: item.quantity + 1}
            return newItem
          }
          return item;
        })
      } else {
        // if not, create new item and set count to 1
      // update state
        state.items = [...state.items, {...action.payload, quantity: 1}]
      }

    },

    decrementItems: (state, action) => {

      const id = action.payload;

      const itemToUpdate = state.items.find(item => item.id === id);

      if (itemToUpdate.quantity !== 1) {
        // remove
        state.items = state.items.map((item) => {
          if (item.id === itemToUpdate.id) {
            return {...item, quantity: item.quantity - 1}
          } else {
            return item
          }
        })
      } else {
        state.items = state.items.filter((item) => item.id !== itemToUpdate.id)
      }
    },

    removeItem: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter(item => item.id !== id);
    },

    removeAllItems: (state) => {
      state.items = [];
    },

  }
})

export const { incrementItems, decrementItems, removeItem, removeAllItems } = cartItemsSlice.actions

export default cartItemsSlice.reducer