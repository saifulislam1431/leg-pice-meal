import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [message, setMessage] = useState('');
    const handleChange = event => {
        setMessage(event.target.value);
    
        console.log('value is:', event.target.value);
      };
    return (
        <div className='text-center'>
            <input type="text" 
            name="" id="message" 
            onChange={handleChange} 
            value={message} 
            placeholder='Search Your Meal' 
            className=' py-5 px-10 bg-yellow-100 mt-10 text-gray-700 placeholder:text-gray-700 placeholder:font-medium rounded-xl' /> 
            <button className='btn btn-warning  text-yellow-50'><Link to={`/searchFood/${message}`}>Search</Link></button>
        </div>
    );
};

export default Home;