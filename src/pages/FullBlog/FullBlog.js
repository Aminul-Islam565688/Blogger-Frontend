import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import spinner from '../../assets/images/spinner.gif';

const FullBlog = () => {
    let { id } = useParams();
    const [fullBlog, setFullBlog] = useState([])

    useEffect(() => {
        fetch(`https://blooming-ravine-75179.herokuapp.com/fullblog/${id}`)
            .then(data => data.json())
            .then(res => setFullBlog(res))
    }, [id])

    console.log(fullBlog);
    console.log('blogsId:', id);
    return (
        <>
            {fullBlog.length === 0 && <img className='mx-auto my-9' src={spinner} alt="" />}

            {
                fullBlog.map(blog => <div className='w-4/5 md:w-2/4 mx-auto my-10  bg-gray-100 rounded-md'>
                    <h1 className='text-5xl p-5 text-gray-800'>{blog.title}</h1>
                    <div className=' ' >
                        <img className='' src={`data:image/png;base64,${blog.image.img}`} alt="" />
                    </div>
                    <p className='text-gray-700 p-5 text-xl'>{blog.content}</p>
                </div>)
            }
        </>
    );
};

export default FullBlog;