import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import Times from '../Times/Times';
import BookMark from '../BookMark/BookMark';

const Card = () => {
    const [card, setCard] = useState([]);
    const [cardTime, setCardTime] = useState([])
    const [bookmark, setBookmark] = useState([])
    useEffect( () => {
        fetch('fake.json')
        .then(res => res.json())
        .then(data => setCard(data))
    }, [] )

    const timeHandler = (times) => {
        const updateTimes = [...cardTime, times]
        setCardTime(updateTimes);
    }

    const bookmarkHandler = (book) => {
        const updateBookmark = [...bookmark, book];
        setBookmark(updateBookmark)
    }

    return (
        <div className='flex mx-auto max-w-7xl gap-6 mt-6'>
            <div className='w-2/3'>
                {
                    card.map(singleCard => <Blog singleCard={singleCard} timeHandler={timeHandler} bookmarkHandler={bookmarkHandler}  key={singleCard.id}></Blog>)
                }
            </div>
            <div className='w-1/3'>
                <Times cardTime={cardTime}></Times>
                <div>
                <h2 className='text-center text-2xl font-bold p-4'>Bookmarked Blogs: {bookmark.length}</h2>
                    {
                        bookmark.map(bkm => <BookMark bkm={bkm} key={bkm.title}></BookMark>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Card;