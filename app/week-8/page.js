'use client';
import React, { useState } from 'react';
import NewItem from './new-item';
import ItemList from './item-list';
import MealIdeas from './meal-ideas';
import itemsData from './items.json';

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState(null);

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleItemSelect = (item) => {
    const cleanedItemName = item.name.replace(/[^a-zA-Z ]/g, "").trim();
    setSelectedItemName(cleanedItemName);
  };

  return (
    <main style={{ backgroundColor: '#C5D5E4', minHeight: '100vh' }}>
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-8 pt-5 text-navy">Shopping List</h1>
        <div className="flex">
          <div className="w-1/2 pr-8"> {/* Increased padding on the right */}
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} onItemSelect={handleItemSelect} />
          </div>
          <div className="w-1/2 pl-8"> {/* Increased padding on the left */}
            {selectedItemName && <MealIdeas ingredient={selectedItemName} />}
          </div>
        </div>
      </div>
    </main>
  );
}