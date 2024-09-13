import React, { useState } from 'react';
import { Container } from '../components';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Home() {
    const navigate = useNavigate();
    const authStatus = useSelector((state) => state.auth.status);

    const handleGetStarted = () => {
        navigate('/signup');
    };

    // State to manage FAQ accordion
    const [activeFAQ, setActiveFAQ] = useState(null);

    const toggleFAQ = (index) => {
        setActiveFAQ(activeFAQ === index ? null : index);
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
            
            {/* Features Section */}
            <div className='py-16 bg-white text-center'>
                <Container>
                    <h2 className='text-3xl font-semibold mb-6'>
                        Our Features
                    </h2>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                        <div className='p-6 bg-gray-100 rounded-lg shadow'>
                            <h3 className='text-xl font-bold mb-2'>Create Your Story</h3>
                            <p className='text-gray-600'>Easily write and publish your own blogs with our intuitive editor. Add titles, images, and text to make your content shine.</p>
                        </div>
                        <div className='p-6 bg-gray-100 rounded-lg shadow'>
                            <h3 className='text-xl font-bold mb-2'>Upload Images</h3>
                            <p className='text-gray-600'>Enhance your posts with visually appealing images. Our platform supports easy image uploads to bring your stories to life.</p>
                        </div>
                        <div className='p-6 bg-gray-100 rounded-lg shadow'>
                            <h3 className='text-xl font-bold mb-2'>Engage with the Community</h3>
                            <p className='text-gray-600'>Comment on posts, follow your favorite writers, and build connections with like-minded individuals.</p>
                        </div>
                    </div>
                </Container>
            </div>

            {/* Customer Reviews Section */}
            <div className='py-16 bg-blue-100'>
                <Container>
                    <h2 className='text-3xl font-semibold mb-6 text-center text-blue-600'>
                        What Our Users Say
                    </h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                        <div className='p-6 bg-white rounded-lg shadow'>
                            <p className='text-lg text-gray-700'>"I love how easy it is to share my thoughts and connect with others. Blog Forge has been a great platform for me to start writing!"</p>
                            <p className='mt-4 text-sm font-bold text-blue-600'>- Jane Doe</p>
                        </div>
                        <div className='p-6 bg-white rounded-lg shadow'>
                            <p className='text-lg text-gray-700'>"The community here is amazing. I've learned so much from other writers and found a new passion for storytelling!"</p>
                            <p className='mt-4 text-sm font-bold text-blue-600'>- John Smith</p>
                        </div>
                        <div className='p-6 bg-white rounded-lg shadow'>
                            <p className='text-lg text-gray-700'>"A perfect place for aspiring writers to grow and get their voices heard. Highly recommend!"</p>
                            <p className='mt-4 text-sm font-bold text-blue-600'>- Emily Johnson</p>
                        </div>
                        <div className='p-6 bg-white rounded-lg shadow'>
                            <p className='text-lg text-gray-700'>"Blog Forge makes it so easy to publish and share stories. The user interface is clean, and the tools are user-friendly."</p>
                            <p className='mt-4 text-sm font-bold text-blue-600'>- Michael Brown</p>
                        </div>
                    </div>
                </Container>
            </div>

            {/* Frequently Asked Questions Section */}
            <div className='py-16 bg-white'>
                <Container>
                    <h2 className='text-3xl font-semibold mb-6 text-center text-blue-600'>
                        Frequently Asked Questions
                    </h2>
                    <div className='space-y-4'>
                        {[{
                            question: "How do I create an account?",
                            answer: "Simply click the 'Sign Up' button on the top right corner and fill in your details. You'll be a part of our community in no time!"
                        }, {
                            question: "Can I customize my blog's appearance?",
                            answer: "Yes, our platform allows you to personalize your blog with different themes, fonts, and colors."
                        }, {
                            question: "How can I interact with other writers?",
                            answer: "You can comment on posts, follow your favorite writers, and even send direct messages."
                        }, {
                            question: "Is there a limit to the number of blogs I can post?",
                            answer: "No, there is no limit! Write as much as you want and share your stories with the world."
                        }].map((faq, index) => (
                            <div key={index} className='p-4 bg-gray-100 rounded-lg shadow'>
                                <div
                                    onClick={() => toggleFAQ(index)}
                                    className='flex justify-between items-center cursor-pointer'>
                                    <h3 className='text-xl font-bold text-blue-600'>
                                        {faq.question}
                                    </h3>
                                    <span className='text-xl text-blue-600'>
                                        {activeFAQ === index ? '-' : '+'}
                                    </span>
                                </div>
                                {activeFAQ === index && (
                                    <p className='mt-4 text-gray-600'>{faq.answer}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default Home;




