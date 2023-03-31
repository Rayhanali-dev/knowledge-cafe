import React from 'react';

const BookMark = (props) => {
    // console.log(props.bkm.id);
    
    return (
        <div>
            <div>
                <h2>{props.bkm.title}</h2>
            </div>
        </div>
    )
};

export default BookMark;