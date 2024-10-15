'use client';
import React, { useState } from 'react';

const NewItem = () => {
  const [name, setName] = useState(''); // Name state
  const [category, setCategory] = useState('produce'); // Category state
  const [quantity, setQuantity] = useState(1); // Quantity state

  // Increment quantity
  const increment = () => {
    if (quantity < 20) setQuantity(quantity + 1);
  };

  // Decrement quantity
  const decrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  // submission handler
  const handleSubmit = (e) => {
    e.preventDefault(); 

    const item = {
      name: name,
      quantity: quantity,
      category: category
    };

    console.log(item);

    // alert display
    alert(`Item: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);

    setName('');
    setQuantity(1);
    setCategory('produce');
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh', // Changed to fill the whole viewport height
      backgroundColor: '#C5D5E4', 
      padding: '20px'
    }}>
      <form onSubmit={handleSubmit} style={{
        backgroundColor: '#8896AB', 
        padding: '20px',
        borderRadius: '8px',
        maxWidth: '400px',
        width: '100%',
        color: 'white' 
      }}>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="name" style={{ marginRight: '10px', fontWeight: 'bold' }}>Item Name:</label>
          <input 
            type="text" 
            id="name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
            style={{
              padding: '5px',
              borderRadius: '4px',
              width: '100%',
              backgroundColor: 'white',
              color: 'black'
            }}
          />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Decrement & Increment Buttons */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <button
              type="button"
              onClick={decrement}
              disabled={quantity === 1}
              style={{
                padding: '5px 10px',
                backgroundColor: '#000099',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                marginRight: '10px',
                fontWeight: 'bold',
                cursor: 'pointer' 
              }}
            >
              -
            </button>
            <span style={{ fontSize: '1.2em', marginRight: '10px' }}>{quantity}</span>
            <button
              type="button"
              onClick={increment}
              disabled={quantity === 20}
              style={{
                padding: '5px 10px',
                backgroundColor: '#000099',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                marginRight: '20px',
                fontWeight: 'bold',
                cursor: 'pointer' 
              }}
            >
              +
            </button>
          </div>

          <div>
            <label htmlFor="category" style={{ marginRight: '10px', fontWeight: 'bold' }}>Category:</label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              style={{
                padding: '5px',
                borderRadius: '4px',
                backgroundColor: 'white',
                color: 'black'
              }}
            >
              <option value="produce">Produce</option>
              <option value="dairy">Dairy</option>
              <option value="bakery">Bakery</option>
              <option value="meat">Meat</option>
              <option value="frozen-foods">Frozen Foods</option>
              <option value="canned-goods">Canned Goods</option>
              <option value="dry-goods">Dry Goods</option>
              <option value="beverages">Beverages</option>
              <option value="snacks">Snacks</option>
              <option value="household">Household</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        {/* Submit Button */}
        <div style={{ marginTop: '20px' }}>
          <button type="submit" style={{
            padding: '10px 20px',
            backgroundColor: '#000099',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            width: '100%',
            fontWeight: 'bold',
            textAlign: 'center'
          }}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewItem;
