import React from 'react';
import { useHistory } from "react-router-dom";

const BlogCart = ({ blogs }) => {

    let history = useHistory();

    const handleClick = () => {
        history.push(`/fullblog/${blogs.id}`);
    }
    console.log(blogs.id);

    return (
        // <div>
        //     <div class="bg-indigo-50 p-2 w-80 max-w-2xl sm:w-full sm:p-4 h-auto sm:h-64 rounded-2xl shadow-lg flex flex-col sm:flex-row gap-2 select-none">
        //         <div
        //             style={{ background: 'url("https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")' }}
        //             class="h-52 sm:h-full sm:w-72 rounded-xl bg-gray-100 bg-center bg-cover"
        //         >
        //         </div>
        //         <div class="flex sm:flex-1 flex-col gap-0 p-1">
        //             <h1 class="text-lg sm:text-xl font-semibold  text-gray-600">
        //                 This is the title for your card. This is really cool
        //             </h1>
        //             <p class="text-gray-500 text-sm sm:text-base line-clamp-3">
        //                 This is the desctiption for your card. This is really really long. This is used to describe the content of the card. I hope you like the design...
        //             </p>
        //             <div class="flex gap-4 mt-auto">
        //                 <button
        //                     class='flex items-center gap-1 sm:text-lg border border-gray-300 px-3 py-1 rounded-full hover:bg-gray-50 transition-colors focus:bg-gray-100 focus:outline-none focus-visible:border-gray-500'
        //                 >
        //                     <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"></path></svg>
        //                     <span>556</span>
        //                 </button>
        //                 <button
        //                     class='flex items-center gap-1 sm:text-lg border border-gray-300 px-1 py-1 rounded-full hover:bg-gray-50 transition-colors focus:bg-gray-100 focus:outline-none focus-visible:border-gray-500'
        //                 >
        //                     <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M464 512a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm200 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm-400 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm661.2-173.6c-22.6-53.7-55-101.9-96.3-143.3a444.35 444.35 0 0 0-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6.3-119.3 12.3-174.5 35.9a445.35 445.35 0 0 0-142 96.5c-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9A449.4 449.4 0 0 0 112 714v152a46 46 0 0 0 46 46h152.1A449.4 449.4 0 0 0 510 960h2.1c59.9 0 118-11.6 172.7-34.3a444.48 444.48 0 0 0 142.8-95.2c41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5.3-60.9-11.5-120-34.8-175.6zm-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-.6 99.6-39.7 192.9-110.1 262.7z"></path></svg>
        //                     <span>56</span>
        //                 </button>
        //                 <button
        //                     class='ml-auto flex items-center gap-1 sm:text-lg border border-gray-300 px-3 py-1 rounded-full hover:bg-gray-50 transition-colors focus:bg-gray-100 focus:outline-none focus-visible:border-gray-500'
        //                 >
        //                     <span>Read more</span>
        //                 </button>
        //             </div>
        //         </div>
        //     </div>
        // </div>


        // This is another Design
        <>
            <div onClick={handleClick} class="m-10 mx-auto bg-gray-200">
                <div class="relative rounded-lg block md:flex items-center bg-gray-100 shadow-xl" style={{ minHeight: '19rem' }}>
                    <div class="relative w-full md:w-2/5 h-full overflow-hidden rounded-t-lg md:rounded-t-none md:rounded-l-lg" style={{ minHeight: '19rem' }}>
                        <img class="absolute inset-0 w-full h-full object-cover object-center" src='https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' alt="" />
                        <div class="absolute inset-0 w-full h-full bg-indigo-900 opacity-75"></div>
                        <div class="absolute inset-0 w-full h-full flex items-center justify-center fill-current text-white">
                            <svg class="w-full h-24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 239 120"><path d="M4.21 86.4V33.31h8.94l4 28.85.86 9.52.87-9.52 4-28.85h9.02V86.4h-5.19V42.83l-.87 7.22-5.19 36.35h-5.19l-5.2-36.93-.57-6.64V86.4zm35.79 0h6V33.31h-6zm114.24 0h6.06V33.31h-6.06zm46.16-24h5.48v-6.01h-5.48v-17h9.23v-6.08h-15.31V86.4h15.29v-6.06h-9.23zm-60-29.14v44.19a2.89 2.89 0 1 1-5.77 0V33.31h-6.34v44.14a9.23 9.23 0 1 0 18.46 0V33.31zm40.11 44.14V42.55a2.9 2.9 0 0 0-2.89-2.89h-2.88v41h2.88a3.68 3.68 0 0 0 2.89-3.18zm-3.21-44.09a9.12 9.12 0 0 1 9.23 9.24v34.9a9.12 9.12 0 0 1-9.23 9.24h-9.23V33.31h9.23m51.64 44.14v-34.9a2.89 2.89 0 0 0-2.88-2.89h-2.89v41h2.89a3.67 3.67 0 0 0 2.88-3.18zm-2.88-44.14a9.06 9.06 0 0 1 8.94 9.24v34.9a9.12 9.12 0 0 1-9.23 9.24h-9.23V33.31h9.52M89.31 57.55c-2.88-2.6-5.19-4.91-5.19-9.23v-5.77A2.89 2.89 0 0 1 87 39.66a3.1 3.1 0 0 1 2.89 2.89v6.05H96v-6.05a9.24 9.24 0 1 0-18.47 0v6.05c.58 6.93 4.62 10.68 7.5 13.56 2.89 2.6 5.2 4.91 5.2 9.24v6a2.89 2.89 0 1 1-5.77 0v-8.89h-6.11v8.94a9.23 9.23 0 1 0 18.46 0v-6c-.57-7.22-4.32-10.68-7.5-13.85m-25.1 0C61.33 55 59 52.64 59 48.32v-5.77a2.89 2.89 0 1 1 5.77 0v6.05h6.06v-6.05a9.24 9.24 0 1 0-18.47 0v6.05c0 6.93 4 10.68 6.93 13.56 2.88 2.6 5.19 4.91 5.19 9.24v6a2.89 2.89 0 0 1-2.88 2.89 3.1 3.1 0 0 1-2.89-2.89v-8.89h-5.46v8.94a9.23 9.23 0 1 0 18.46 0v-6c-.28-7.22-4.32-10.68-7.5-13.85m56.84-9.23v-5.82a9.24 9.24 0 1 0-18.47 0v34.9a9.45 9.45 0 0 0 9 9.24 6.63 6.63 0 0 0 6.34-4l2.89 4V62.45h-9.23v6.06h2.88v8.94a2.73 2.73 0 0 1-2.88 2.89 2.89 2.89 0 0 1-2.89-2.89v-34.9a2.9 2.9 0 0 1 2.89-2.89 3.1 3.1 0 0 1 2.88 2.89v6.05h6.64z"></path></svg>
                        </div>
                    </div>
                    <div class="w-full md:w-3/5 h-full flex items-center bg-gray-100 rounded-lg">
                        <div class="p-12 md:pr-24 md:pl-16 md:py-12">
                            <p class="text-gray-600"><span class="text-gray-900">Missguided</span> is a UK-based fashion retailer that has nearly doubled in size since last year. They integrated Stripe to deliver seamless checkout across mobile and web for customers in 100+ countries, all while automatically combating fraud.</p>
                            <a class="flex items-baseline mt-3 text-indigo-600 hover:text-indigo-900 focus:text-indigo-900" href="#">
                                <span>Learn more about our :{blogs.id}</span>
                                <span class="text-xs ml-1">&#x279c;</span>
                            </a>
                        </div>
                        <svg class="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-gray-100 -ml-12" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <polygon points="50,0 100,0 50,100 0,100" />
                        </svg>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogCart;