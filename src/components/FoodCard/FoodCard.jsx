import React from 'react';
import { Link } from 'react-router-dom';

const FoodCard = ({ singleFood }) => {
    // console.log(singleFood);
    const { strCategory, strArea, idMeal, strMealThumb, strMeal } = singleFood;
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl mt-20">
                <figure><img src={strMealThumb} alt={strMeal} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{strMeal}</h2>
                    <div>
                        <p>Category: {strCategory}</p>
                        <p>Area: {strArea}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-warning text-yellow-50"><Link to={`/foodDetails/${idMeal}`}>View Details</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;