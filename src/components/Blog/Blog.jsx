import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import BookMark from '../BookMark/BookMark';

const Blog = (props) => {
    console.log(props.singleCard);
    const {images, AuthorImages, AuthorName, PublishDate, readtime, title} = props.singleCard;
    return (
        <div className='max-w-7xl mx-auto mt-4'>
            <div className='flex'>
                <div className='w-4/6'>
                    <img src={images} alt="blog-img" />
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center gap-2 my-3'>
                            <img className='w-16 h-16 rounded-full object-cover' src={AuthorImages} alt="" />
                            <div>
                                <h3 className='font-bold text-2xl'>{AuthorName}</h3>
                                <span>{PublishDate}</span>
                            </div>
                        </div>
                        <div>
                        </div>
                        <div>
                            <span className='mr-3 text-lg'>{readtime} min read</span>
                            <span><FontAwesomeIcon icon={faBookmark}></FontAwesomeIcon></span>
                        </div>
                    </div>
                    <div>
                        <h2 className='text-3xl font-bold my-4'>{title}</h2>
                    </div>
                </div>
                <div>
                    <BookMark></BookMark>
                </div>
            </div>
        </div>
    );
};

export default Blog;