import React from 'react';
import { useParams } from 'react-router-dom';
import blogsData from '../../assets/fakedata/blogs.json';

const FullBlog = () => {
    const { id } = useParams();
    const singleData = blogsData[id]
    console.log(singleData);
    return (
        <>
            <h1>{singleData.title}</h1>
            <img src={singleData.images} alt="" />
            <p>{singleData.description}</p>
        </>
    );
};

export default FullBlog;