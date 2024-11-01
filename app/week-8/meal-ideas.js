"use client";
import React, { useState, useEffect } from 'react';

const fetchMealIdeas = async (ingredient) => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
  const data = await response.json();
  return data.meals;
};

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  const loadMealIdeas = async () => {
    const mealIdeas = await fetchMealIdeas(ingredient);
    setMeals(mealIdeas || []);
  };

  useEffect(() => {
    if (ingredient) {
      loadMealIdeas();
    }
  }, [ingredient]);

  return (
    <div className="meal-ideas">
      <h2 className="text-2xl font-semibold mb-4">Meal Ideas for {ingredient}</h2>
      <ul className="space-y-4">
        {meals.map((meal) => (
          <li key={meal.idMeal} className="meal-item flex items-center space-x-4">
            <img src={meal.strMealThumb} alt={meal.strMeal} className="w-16 h-16 rounded" />
            <span className="text-lg">{meal.strMeal}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}