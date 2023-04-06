import React from 'react';
import { useLoaderData } from 'react-router-dom';
import FoodCard from '../FoodCard/FoodCard';

const SearchFood = () => {
    const foods = useLoaderData()
    const allFoods = foods.meals;
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mx-2'>
            {
                allFoods.map(singleFood => <FoodCard
                key={singleFood.idMeal}
                singleFood = {singleFood}
                ></FoodCard>)
            }
        </div>
    );
};

export default SearchFood;