import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InventoryItem, inventoryList } from "../../Utilities/inventory";

const initialState = {
    items: Object.values(inventoryList) as InventoryItem[],
    fetchedItems: Object.values(inventoryList) as InventoryItem[],
    totalQuantity: 0,
    totalPrice: 0,
};

export const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItemCart: (state, action: PayloadAction<String>) => {
            Object.values(state.fetchedItems).forEach(item => {
                if (item.id === action.payload) {
                    item.quantity += 1;
                    state.totalQuantity += 1;
                    state.totalPrice += item.price;
                }
            });
            Object.values(state.items).forEach(item => {
                if (item.id === action.payload) {
                    item.quantity += 1;
                }
            });
            console.log("Item added to cart:", state.totalQuantity);
        },
        deleteItemCart: (state, action: PayloadAction<String>) => {
            state.fetchedItems.forEach(item => {
                if (item.id === action.payload) {
                    if (item.quantity > 0) {
                        item.quantity -= 1;
                        state.totalQuantity -= 1;
                        state.totalPrice -= item.price;
                    }
                }
            });
            state.items.forEach(item => {
                if (item.id === action.payload) {
                    if (item.quantity > 0) {
                        item.quantity -= 1;
                    }
                }
            });
        },
        updateFilteredItems: (state, action: PayloadAction<string[]>) => {
            if(action.payload.length === 0) {
                state.fetchedItems = state.items; // If no filter, show all items
            } else {
            state.fetchedItems = state.items.filter(item =>
              // check if item has tags and if ANY of them are in the filter array
              item.tags?.some(tag => action.payload.includes(tag))
            );
            console.log("Filtered items updated:", state.fetchedItems)
          }
        },
        filterByPrice: (state, action: PayloadAction<{ min: number, max: number }>) => {
            const { min, max } = action.payload;
            state.fetchedItems = state.fetchedItems.filter(item => item.price >= min && item.price <= max);
            console.log("Filtered items by price:", state.fetchedItems);

        }
    }
});

export const { addItemCart, deleteItemCart,updateFilteredItems,filterByPrice} = CartSlice.actions;
export default CartSlice.reducer;
