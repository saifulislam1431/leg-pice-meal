import React from 'react';
import { useNavigate } from 'react-router-dom';

const ShowDetails = ({ detail }) => {
    const navigate = useNavigate()
    const handleNavigate = ()=>{
           navigate(-1);
    }
    const { strMeal, strInstructions, strYoutube, strMealThumb } = detail;
    return (
        <div>
            <h1 className='text-center font-bold text-3xl mt-10'>The details of <span className='text-yellow-600'>{strMeal}</span></h1>
            
                <div className="card lg:card-side bg-base-100 shadow-xl mx-4 mt-4">
                    <figure><img src={strMealThumb} alt={strMeal} /></figure>
                    <div className="card-body">
                        <p className='text-lg font-medium'>{strInstructions}</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary"><a href={strYoutube}>Show Video Instruction</a></button>
                            <button className='btn btn-error' onClick={handleNavigate}>Go Back</button>
                        </div>
                    </div>
                </div>
            
        </div>
    );
};

export default ShowDetails;