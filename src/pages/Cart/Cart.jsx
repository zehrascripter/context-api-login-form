import React, { useContext } from 'react';
import { CartContextValue } from '../../components/CartContext/CartContext';

const Cart = () => {
  const cartContextValue = useContext(CartContextValue);
  const { cartItems, addToCart, removeFromCart, deleteItemFromCart } = cartContextValue; // ✅ Delete function bhi le lo

  return (
    <div className="min-h-screen py-10 px-4">
      <div className="container mx-auto max-w-7xl">
        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">{item.title}</h2>
                
                {/* ✅ Image Background ko White kar diya */}
                <div className="w-full h-64 bg-white mb-4 flex justify-center items-center">
                  <img src={item.image} alt={item.title} className="object-contain max-h-full max-w-full" />
                </div>

                {/* Price Update with Quantity */}
                <p className="text-lg font-semibold text-gray-700">
                  Price: <span className="text-green-600">${item.price} x {item.quantity}</span> =  
                  <span className="text-orange-500 font-bold"> ${item.price * item.quantity}</span>
                </p>

                {/* Quantity Controls */}
                <div className="flex items-center justify-between mt-4">
                  <button
                    onClick={() => removeFromCart(item)}
                    className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition duration-300"
                  >
                    -
                  </button>
                  <span className="text-lg font-semibold">{item.quantity}</span>
                  <button
                    onClick={() => addToCart(item)}
                    className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600 transition duration-300"
                  >
                    +
                  </button>
                </div>

                {/* ❌ Delete Button (Poora Item Delete Karne Ke Liye) */}
                <button
                  onClick={() => deleteItemFromCart(item.id)}
                  className="mt-4 w-full bg-red-700 text-white py-2 rounded-lg hover:bg-red-800 transition duration-300"
                >
                  Delete Item
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-xl text-gray-600">Your cart is empty.</p>
        )}

        {/* Total Cart Price */}
        {cartItems.length > 0 && (
          <div className="mt-8 p-6 bg-white rounded-lg shadow-lg max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-800">Total Amount</h2>
            <p className="text-3xl text-orange-500 font-bold mt-2">
              ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
