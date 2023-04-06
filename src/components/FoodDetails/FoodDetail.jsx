import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowDetails from '../ShowDetails/ShowDetails';

const FoodDetail = () => {
    const loadDetails = useLoaderData();
    const details = loadDetails.meals
    return (
        <div>
            {
                details.map(detail=><ShowDetails
                key={detail.idMeal}
                detail = {detail}
                ></ShowDetails>)
            }
        </div>
    );
};

export default FoodDetail;