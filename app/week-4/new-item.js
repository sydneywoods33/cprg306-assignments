'use client'; 
import React, { useState } from 'react';

const NewItem = () => {
  const [item, setItem] = useState('');
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    if (quantity < 20) setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '30vh'
    }}>
      <form>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <button
            type="button"
            onClick={decrement}
            disabled={quantity === 1}
            style={{
              padding: '5px',
              backgroundColor: '#0070f3',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
            }}
          >
            -
          </button>
          <span style={{ margin: '0 10px', fontSize: '1.2em' }}>{quantity}</span>
          <button
            type="button"
            onClick={increment}
            disabled={quantity === 20}
            style={{
              padding: '5px',
              backgroundColor: '#0070f3',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
            }}
          >
            +
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewItem;
