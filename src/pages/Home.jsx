import React from 'react';
import { Container } from '../components';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Import useSelector to access the auth state

function Home() {
    const navigate = useNavigate();
    const authStatus = useSelector((state) => state.auth.status); // Get auth status from Redux

    const handleGetStarted = () => {
        navigate('/login'); // Navigate to the login page
    };

    return (
        <div className='relative min-h-screen bg-gray-100'>
            {/* Hero Section */}
            <div className='relative bg-blue-600 py-16'>
                <Container>
                    <div className='absolute inset-0'>
                        <div className='w-full h-full bg-blue-700 opacity-50' />
                    </div>
                    <div className='relative z-10 text-center text-white'>
                        <h1 className='text-5xl font-extrabold mb-4'>
                            Welcome to Blog Forge
                        </h1>
                        <p className='text-lg mb-4'>
                            Discover stories, insights, and ideas crafted by our vibrant community of writers.
                        </p>
                        <p className='text-lg mb-8'>
                            Unleash your creativity and join a space where words have the power to inspire.
                        </p>
                        {/* Show the "Get Started" button only if the user is not logged in */}
                        {!authStatus && (
                            <button 
                                onClick={handleGetStarted}
                                className='px-8 py-3 bg-yellow-400 text-gray-800 rounded-full hover:bg-yellow-300 transition-transform transform hover:scale-105'>
                                Get Started
                            </button>
                        )}
                    </div>
                </Container>
            </div>
            
            {/* Slogan Section */}
            <div className='py-16 bg-white text-center'>
                <Container>
                    <h2 className='text-3xl font-semibold mb-4'>
                        Crafting Stories, One Blog at a Time
                    </h2>
                    <p className='text-lg text-gray-600 mb-4'>
                        Dive into our world of blogs and discover inspiring stories and ideas. Whether you're here to share or read, you'll find a community that values creativity and expression.
                    </p>
                    <p className='text-lg text-gray-600'>
                        Be part of the conversation, share your voice, and connect with others who are passionate about storytelling.
                    </p>
                </Container>
            </div>
        </div>
    );
}

export default Home;



