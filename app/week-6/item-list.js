"use client";

import React, { useState } from "react";
import Item from "./item";
import itemsData from "./items.json";

export default function ItemList() {
  const [items] = useState(itemsData);
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  const getButtonClass = (type) => {
    return sortBy === type
      ? "bg-blue-500 text-white"
      : "bg-white text-blue-500";
  };

  return (
    <main className="p-6 min-h-screen">
      <div className="max-w-4xl mx-auto">

        {/* Sorting Buttons */}
        <div className="flex space-x-4 mb-4">
          <button
            onClick={() => setSortBy("name")}
            className={`p-2 rounded ${getButtonClass("name")}`}
          >
            Sort by Name
          </button>

          <button
            onClick={() => setSortBy("category")}
            className={`p-2 rounded ${getButtonClass("category")}`}
          >
            Sort by Category
          </button>
        </div>

       

        {/* Render sorted items */}
        {sortedItems.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </div>
    </main>
  );
}
