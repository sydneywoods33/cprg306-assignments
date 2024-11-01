import React, { useState } from 'react';
import Item from './item';

const ItemList = ({ items, onItemSelect }) => {
  const [sortedItems, setSortedItems] = useState(items);

  const handleSort = (criteria) => {
    const sorted = [...sortedItems].sort((a, b) => {
      if (a[criteria] < b[criteria]) return -1;
      if (a[criteria] > b[criteria]) return 1;
      return 0;
    });
    setSortedItems(sorted);
  };

  return (
    <div>
      <div className="mb-4 flex justify-center">
        <button
          onClick={() => handleSort('name')}
          style={{ backgroundColor: '#000099' }}
          className="mr-2 p-2 text-white rounded"
        >
          Sort by Name
        </button>
        <button
          onClick={() => handleSort('quantity')}
          style={{ backgroundColor: '#000099' }}
          className="p-2 text-white rounded"
        >
          Sort by Quantity
        </button>
      </div>
      <div>
        {sortedItems.map((item) => (
          <Item
            key={item.name}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
            onSelect={() => onItemSelect(item)}
          />
        ))}
      </div>
    </div>
  );
};

export default ItemList;