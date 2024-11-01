import React from 'react';

const Item = ({ name, quantity, category, onSelect }) => (
  <div
    className="p-4 mb-4 bg-white rounded-lg shadow-md cursor-pointer"
    onClick={() => onSelect(name)}
  >
    <h3 className="text-xl font-bold">{name}</h3>
    <p className="text-gray-700">Quantity: {quantity}</p>
    <p className="text-gray-500">Category: {category}</p>
  </div>
);

export default Item;