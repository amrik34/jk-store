import { createSlice } from "@reduxjs/toolkit";

const loadCartItems = () => {
  if (typeof window === "undefined") return [];
  const stored = window.localStorage.getItem("cart");
  if (!stored) return [];
  try {
    const parsed = JSON.parse(stored);
    return Array.isArray(parsed)
      ? parsed.map((item: any) => ({
          ...item,
          quantity: item.quantity ?? 1,
        }))
      : [];
  } catch {
    return [];
  }
};

const initialState = {
  items: loadCartItems(),
};

const addToCart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, actions) => {
      const newItem = actions.payload;
      const existingItem = state.items.find(
        (item: any) => item.id === newItem.id,
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...newItem, quantity: 1 });
      }

      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    removeItem: (state, actions) => {
      const itemId =
        typeof actions.payload === "object"
          ? actions.payload.id
          : actions.payload;
      const cartData = state.items.filter((item: any) => item.id !== itemId);
      state.items = cartData;
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    updateQuantity: (state, actions) => {
      const { id, quantity } = actions.payload;
      const nextQty = Number.parseInt(quantity, 10);
      const safeQty = Number.isNaN(nextQty) || nextQty < 1 ? 1 : nextQty;
      const existingItem = state.items.find((item: any) => item.id === id);

      if (existingItem) {
        existingItem.quantity = safeQty;
        localStorage.setItem("cart", JSON.stringify(state.items));
      }
    },
    clearItem: (state) => {
      state.items = [];
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
  },
});

export const { addItem, removeItem, updateQuantity, clearItem } =
  addToCart.actions;
export default addToCart.reducer;
