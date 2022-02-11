import { createContext, useReducer } from "react";
import structuredClone from "@ungap/structured-clone";

const CartContext = createContext({
  items: [],
  totalQuantity: 0,
});

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM" && action.payload.quantity > 0) {
    const newCart = structuredClone(state);
    const item = newCart.items.find((item) => item.id === action.payload.id);
    if (item) {
      item.quantity += action.payload.quantity;
    } else {
      newCart.items.push(action.payload);
    }
    const totalQuantity = newCart.items.reduce((acc, item) => {
      return acc + item.quantity;
    }, 0);
    newCart.totalQuantity = totalQuantity;
    return newCart;
  }
  if (action.type === "UPDATE_ITEM") {
    const newCart = structuredClone(state);
    const itemIndex = newCart.items.findIndex(
      (item) => item.id === action.payload.id
    );

    if (itemIndex < 0) {
      return newCart;
    }
    if (action.payload.quantity <= 0) {
      newCart.items.splice(itemIndex, 1);
    } else {
      newCart.items[itemIndex].quantity = action.payload.quantity;
    }
    const totalQuantity = newCart.items.reduce((acc, item) => {
      return acc + item.quantity;
    }, 0);
    newCart.totalQuantity = totalQuantity;
    return newCart;
  }
  return { items: [], totalQuantity: false };
};

const CartContextProvider = ({ children }) => {
  const [cart, dispatchCart] = useReducer(cartReducer, {
    items: [],
    totalAmount: 0,
  });

  return (
    <CartContext.Provider
      value={{
        cart: cart,
        dispatchCart: dispatchCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
export { CartContextProvider };
