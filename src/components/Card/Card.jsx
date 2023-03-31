import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Card = () => {

    const [card, setCard] = useState([]);
    useEffect( () => {
        fetch('fake.json')
        .then(res => res.json())
        .then(data => setCard(data))
    }, [] )

    return (
        <div>
            {
                card.map(singleCard => <Blog singleCard={singleCard} key={singleCard.id}></Blog>)
            }
        </div>
    );
};

export default Card;