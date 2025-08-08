import { createContext, useReducer } from "react";

export const Store = createContext();

// Initial global state with empty cart
const initialState = {
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
  },
};

function reducer(state, action) {
  switch (action.type) {
    case "CART_ADD_ITEM":
      // add to cart
      const newItem = action.payload;
      // Check if item already exists in cart
      const existItem = state.cart.cartItems.find(
        (item) => item._id === newItem._id
      );
      // If exists, replace it with the updated item(newItem); else, add new item
      const cartItems = existItem
        ? state.cart.cartItems.map((item) =>
            item._id === existItem._id ? newItem : item
          )
        : [...state.cart.cartItems, newItem];
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      // Return updated state with new cart items
      return { ...state, cart: { ...state.cart, cartItems } };
    case "CART_REMOVE_ITEM": {
      const cartItems = state.cart.cartItems.filter(
        (item) => item._id !== action.payload._id
      );
      return { ...state, cart: { ...state.cart, cartItems } };
    }
    default:
      return state;
  }
}
// Context provider to make state and dispatch available to all components
export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children} </Store.Provider>;
}
