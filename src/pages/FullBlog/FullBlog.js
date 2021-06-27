import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import spinner from '../../assets/images/spinner.gif';

const FullBlog = () => {
    let { id } = useParams();
    const [fullBlog, setFullBlog] = useState([])

    useEffect(() => {
        fetch(`https://blooming-ravine-75179.herokuapp.com/fullblog/${id}`)
            .then(data => data.json())
            .then(res => setFullBlog(res))
    }, [id])

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
            {fullBlog.length === 0 || <div div className="rounded-md">
                <Link
                    to="/"
                    className="w-52 mx-auto my-5 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                    style={{ background: '#f06a35' }}
                >
                    Back to Home
                </Link>
            </div>}
        </>
    );
};

export default FullBlog;