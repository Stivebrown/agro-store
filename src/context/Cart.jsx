import { createContext, useState, useEffect } from "react";
export const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(
    localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : []
  );
  const addToCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) => {
      cartItem.id === item.id;
    });
    if (isItemInCart) {
      setCartItems(
        cartItems.map(
          (
            cartItem //if the item is already in the cart then increase the number of items
          ) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem //otherwise, return cart item
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]); //if the item is not in the cart, add it to the cart
    }
  };

  const removeFromCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);
    if (isItemInCart.quantity === 1) {
      setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id)); //if the quantity of the item is 1, remove the item from the cart
    } else {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 } //if the quantity of the item is greater than 1, decrease by one
            : cartItem
        )
      );
    }
  };

  const clearCart = () => {
    setCartItems([]); //set the cart items to an empty array
  };

  const getCartTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    ); //Calulate the total price of items in the cart
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const cartItems = localStorage.getItem("cartItems");
    if (cartItems) {
      setCartItems(JSON.parse(cartItems));
    }
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        getCartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
