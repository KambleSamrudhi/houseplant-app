import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, removeItem } from '../features/cartSlice';

const ShoppingCartPage = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = useSelector((state) => state.cart.totalItems);
  const totalCost = useSelector((state) => state.cart.totalCost);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: '#f0f4f8', textAlign: 'left' }}>
                <th style={{ padding: '10px', border: '1px solid #e2e8f0' }}>Image</th>
                <th style={{ padding: '10px', border: '1px solid #e2e8f0' }}>Name</th>
                <th style={{ padding: '10px', border: '1px solid #e2e8f0' }}>Price</th>
                <th style={{ padding: '10px', border: '1px solid #e2e8f0' }}>Quantity</th>
                <th style={{ padding: '10px', border: '1px solid #e2e8f0' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '10px', textAlign: 'center' }}>
                    <img src={item.img} alt={item.name} style={{ width: '50px', height: '50px', borderRadius: '5px' }} />
                  </td>
                  <td style={{ padding: '10px' }}>{item.name}</td>
                  <td style={{ padding: '10px' }}>${item.price.toFixed(2)}</td>
                  <td style={{ padding: '10px', textAlign: 'center' }}>{item.quantity}</td>
                  <td style={{ padding: '10px', textAlign: 'center' }}>
                    <button
                      onClick={() => dispatch(increment(item.id))}
                      style={{
                        padding: '5px 10px',
                        margin: '0 5px',
                        backgroundColor: '#38a169',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                      }}
                    >
                      +
                    </button>
                    <button
                      onClick={() => dispatch(decrement(item.id))}
                      style={{
                        padding: '5px 10px',
                        margin: '0 5px',
                        backgroundColor: '#e53e3e',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                      }}
                    >
                      -
                    </button>
                    <button
                      onClick={() => dispatch(removeItem(item.id))}
                      style={{
                        padding: '5px 10px',
                        margin: '0 5px',
                        backgroundColor: '#718096',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                      }}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ marginTop: '20px', textAlign: 'right' }}>
            <p>Total Items: {totalItems}</p>
            <p>Total Cost: ${totalCost.toFixed(2)}</p>
            <button
              style={{
                padding: '10px 20px',
                marginRight: '10px',
                backgroundColor: '#38a169',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              Checkout (Coming Soon)
            </button>
            <button
              onClick={() => (window.location.href = '/products')}
              style={{
                padding: '10px 20px',
                backgroundColor: '#2b6cb0',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              Continue Shopping
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCartPage;