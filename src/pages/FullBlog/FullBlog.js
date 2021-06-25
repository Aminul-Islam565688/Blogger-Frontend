import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FullBlog = () => {
    let { id } = useParams();
    const [fullBlog, setFullBlog] = useState([])

    useEffect(() => {
        fetch(`http://localhost:4564/fullblog/${id}`)
            .then(res => res.json())
            .then(data => setFullBlog(...data))
    }, [id])

    console.log(fullBlog);
    console.log('blogsId:', id);
    return (
        <>
            <h1>{fullBlog.title}</h1>
            <img src={`data:image/png;base64,${fullBlog.image.img}`} alt="" />
            <p>{fullBlog.content}</p>
        </>
    );
};

export default FullBlog;