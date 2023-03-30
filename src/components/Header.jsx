import React from 'react';

const Header = () => {
    return (
        <div className='mx-auto max-w-7xl py-6 border-b-2'>
            <div className="flex justify-between items-center">
                <div className="logo">
                    <h3 className='text-3xl font-bold'>Knowledge cafe</h3>
                </div>
                <div className="header-img">
                    <img className='w-16 h-16 rounded-full object-cover' src='https://images.pexels.com/photos/3772623/pexels-photo-3772623.jpeg?auto=compress&cs=tinysrgb&w=600' alt="" />
                </div>
            </div>
        </div>
    );
};

export default Header;