"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    plats: []
};

const updateLocalStorage = (items) => {
    localStorage.removeItem('items');
    localStorage.setItem('items', JSON.stringify(items));
};

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addToBasket(state, action) {
            const index = state.plats.findIndex(item => item.plat.id == action.payload.id);
            if (index !== -1) {
                state.plats[index].quantity++;
            } else {
                state.plats.push({
                    plat: action.payload,
                    quantity: 1
                });
            }
            updateLocalStorage(state.plats);
        },
        removeFromBasket(state, action) {
            if (state.plats[action.payload].quantity > 1) {
                state.plats[action.payload].quantity--;
            } else {
                state.plats.splice(action.payload, 1);
            }
            updateLocalStorage(state.plats);
        },
        emptyBasket(state) {
            state.plats = [];
            updateLocalStorage(state.plats);
        },
        setItems(state, action) {
            state.plats = action.payload;
        }
    }
});

export const { addToBasket, removeFromBasket, emptyBasket, setItems } = basketSlice.actions;

export default basketSlice.reducer;