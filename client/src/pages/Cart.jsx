import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div style={{ padding: '50px' }}>
      <h2>Your Cart ({cart.length})</h2>
      {cart.length === 0 ? <p>Your OneElixir collection is empty.</p> : (
        cart.map((item, index) => (
          <div key={index} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
            <span>{item.name} - ${item.price}</span>
            <button onClick={() => removeFromCart(item._id)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;