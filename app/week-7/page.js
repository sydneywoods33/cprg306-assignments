'use client';
import React, { useState } from 'react';
import NewItem from './new-item'; 
import ItemList from './item-list'; 
import itemsData from './items.json'; 

export default function Page() {
    const [items, setItems] = useState(itemsData);

    const handleAddItem = (newItem) => {
        setItems((prevItems) => [...prevItems, newItem]);
    };

    return (
        <main style={{ backgroundColor: '#C5D5E4', minHeight: '100vh' }}>
            <div className="max-w-2xl mx-auto">
                <h1 className="text-3xl font-bold text-center mb-2 pt-5 text-navy">Shopping List</h1>
                <NewItem onAddItem={handleAddItem} />
                <ItemList items={items} />
            </div>
        </main>
    );
}
