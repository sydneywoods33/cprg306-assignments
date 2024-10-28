import React from 'react';
import Item from './item';

export default function ItemList({ items }) {

  const renderItems = [...items];

  return (
    <div>
      {renderItems.map((item) => (
        <Item
          key={item.id}
          name={item.name}
          quantity={item.quantity}
          price={item.price}
        />
      ))}
    </div>
  );
}
