import React from 'react';

const BookMark = (props) => {
    // console.log(props.bkm.id);
    return (
        <div className='mx-3'>
            <h2 className='text-2xl font-bold text-center shadow-lg p-3 bg-red-400 mb-3'>{props.bkm.title}</h2>
        </div>
    )
};

export default BookMark;