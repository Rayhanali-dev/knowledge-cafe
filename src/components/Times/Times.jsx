import React from 'react';

const Times = (props) => {
    const readtimes = props.cardTime;
    let totalTime = 0;
    for(const blog of readtimes){
        totalTime = totalTime + blog.readtime
    }
    return (
        
        <div className='bg-red-50 shadow-xl'>
            <h3 className='text-center text-2xl font-bold p-4'>Spent time on read : <span>{totalTime}</span> min</h3>
        </div>
    );
};

export default Times;