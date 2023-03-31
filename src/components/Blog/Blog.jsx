import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Blog = (props) => {

    const { images, AuthorImages, AuthorName, PublishDate, readtime, title } = props.singleCard;
    const timeHandler = props.timeHandler;
    const bookmarkHandler = props.bookmarkHandler

    return (
        <div>
            <div className='w-full px-3 lg:px-0'>
                <img src={images} alt="blog-img" />
                <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-2 my-3'>
                        <img className='w-16 h-16 rounded-full object-cover' src={AuthorImages} alt="" />
                        <div>
                            <h3 className='font-bold text-1xl lg:text-2xl'>{AuthorName}</h3>
                            <span>{PublishDate}</span>
                        </div>
                    </div>
                    <div>
                    </div>
                    <div>
                        <span className='mr-3 text-lg'>{readtime} min read</span>
                        <span onClick={() => bookmarkHandler(props.singleCard)}><FontAwesomeIcon icon={faBookmark}></FontAwesomeIcon></span>
                    </div>
                </div>
                <div>
                    <h2 className='lg:text-3xl text-xl font-bold my-4'>{title}</h2>
                </div>
                <div className='pb-5 font-semibold text-lg'>
                    <span onClick={() => timeHandler(props.singleCard)} className='text-blue-500' href="#">Mark as read</span>
                </div>
            </div>
        </div>
    );
};

export default Blog;