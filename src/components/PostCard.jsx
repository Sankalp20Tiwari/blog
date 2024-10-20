import React from 'react';
import appwriteService from "../appwrite/config";
import { Link } from 'react-router-dom';

function PostCard({ $id, title, featuredImage }) {
    return (
        <Link to={`/post/${$id}`} className='w-full'>
            <div className='flex flex-col h-full bg-gradient-to-r from-gray-600 to-gray-900 rounded-xl p-4 shadow-lg'>
                <div className='flex-grow flex justify-center mb-4'>
                    <img 
                        src={appwriteService.getFilePreview(featuredImage)} 
                        alt={title} 
                        className='rounded-xl max-h-48 object-cover' // Set a max height for the image
                    />
                </div>
                <h2 className='text-2xl sm:text-xl text-white text-center'>{title}</h2>
            </div>
        </Link>
    );
}

export default PostCard;
