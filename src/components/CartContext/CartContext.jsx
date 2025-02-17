import React, { createContext, useState, useEffect } from "react";

export const CartContextValue = createContext();

const CartContext = ({ children }) => {
  // Local Storage se items load karo
  const [cartItems, setCartItems] = useState(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    return storedCartItems ? JSON.parse(storedCartItems) : [];
  });

  // 🛠️ Function to Update Local Storage (Har Update ke Sath)
  const updateLocalStorage = (items) => {
    localStorage.setItem("cartItems", JSON.stringify(items));
  };

  // 🛒 Add to Cart Function (Fix: Properly Update Quantity)
  const addToCart = (item) => {
    setCartItems((prevCartItems) => {
      let updatedCart;
      const existingItemIndex = prevCartItems.findIndex((cartItem) => cartItem.id === item.id);
  
      if (existingItemIndex !== -1) {
        // Agar item pehle se hai, to quantity increase karo
        updatedCart = prevCartItems.map((cartItem, index) =>
          index === existingItemIndex
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        // Naya item add karo with quantity 1
        updatedCart = [...prevCartItems, { ...item, quantity: 1 }];
      }
  
      updateLocalStorage(updatedCart); // ✅ Local Storage Update
      return updatedCart;
    });
  };

  // ❌ Remove from Cart Function (Ek Quantity Kam Karo)
  const removeFromCart = (item) => {
    setCartItems((prevCartItems) => {
      let updatedCart = prevCartItems
        .map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
        )
        .filter((cartItem) => cartItem.quantity > 0);

      updateLocalStorage(updatedCart);
      return updatedCart;
    });
  };

  // ❌🚨 **Delete Item Function (Poora Item Delete Karne Ke Liye)**
  const deleteItemFromCart = (itemId) => {
    setCartItems((prevCartItems) => {
      let updatedCart = prevCartItems.filter((cartItem) => cartItem.id !== itemId);
      updateLocalStorage(updatedCart);
      return updatedCart;
    });
  };

  return (
    <CartContextValue.Provider value={{ cartItems, addToCart, removeFromCart, deleteItemFromCart }}>
      {children}
    </CartContextValue.Provider>
  );
};

export default CartContext;
