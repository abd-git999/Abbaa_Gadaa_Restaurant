
import { createContext, useContext, useState, useEffect } from "react";
const CartContext = createContext();

export function CartProvider({ children }) {
const [cartItems, setCartItems] = useState(() => {
  const savedCart = localStorage.getItem("cartItems");
  return savedCart ? JSON.parse(savedCart) : [];
});
useEffect(() => {
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
}, [cartItems]);
  const addToCart = (dish, quantity = 1) => {
    setCartItems((previousItems) => {
      const existingItem = previousItems.find(
        (item) => item.id === dish.id
      );

      if (existingItem) {
        return previousItems.map((item) =>
          item.id === dish.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [...previousItems, { ...dish, quantity }];
    });
  };

  const removeFromCart = (dishId) => {
    setCartItems((previousItems) =>
      previousItems.filter((item) => item.id !== dishId)
    );
  };
const clearCart = () => {
  setCartItems([]);
};
  const updateQuantity = (dishId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(dishId);
      return;
    }

    setCartItems((previousItems) =>
      previousItems.map((item) =>
        item.id === dishId ? { ...item, quantity } : item
      )
    );
  };

const cartCount = cartItems.reduce(
  (total, item) => total + item.quantity,
  0
);

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    updateQuantity,
    cartCount,
    cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
