import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
    const [isOpen,setIsOpen] = useState(false);
    return (
        <div>
            <nav className='flex justify-between items-center py-4 px-6 md:px-12 bg-yellow-200'>
            <div>
                <h1 className='text-4xl font-bold'>Khadok</h1>
            </div>
            <div className='z-20'>
                <ul className={`text-center flex flex-col md:flex-row justify-center items-center font-medium text-xl  absolute md:static duration-200 bg-yellow-200 w-full py-10 md:py-0  ${isOpen ? 'right-0 top-16' : ' -right-full top-16'}`}>
                    <Link to='/' className='mb-4 md:ml-6 hover:text-yellow-900'>Home</Link>
                    <Link to='/about' className='mb-4 md:ml-6 hover:text-yellow-900'>About</Link>
                    <Link to='/contact' className='mb-4 md:ml-6 hover:text-yellow-900'>Contact</Link>
                    <Link to='/food' className='mb-4 md:ml-6 hover:text-yellow-900'>Food</Link>
                </ul>
            </div>
            <button onClick={()=>setIsOpen(!isOpen)} className='md:hidden'>
             {
                isOpen ? <XMarkIcon className="h-8 w-8 text-orange-700" />: <Bars3Icon className="h-8 w-8 text-gray-800" /> 
             }

            </button>
        </nav>
        <Outlet></Outlet>
        </div>
        
    );
};

export default Navbar;