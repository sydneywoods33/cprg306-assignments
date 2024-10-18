import React from 'react';

export default function Item({name, quantity, price}) {
    return (
    <div className="p-3 mb-3 bg-gray-800  text-white">
        <h3 className="text-xl font-semibold text-white">{name}</h3>
        <p>Quantity: {quantity}</p>
        <p>${price}</p>  
    </div>
    );
    
}; 