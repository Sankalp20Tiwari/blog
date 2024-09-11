import React from 'react';
import { Signup as SignupComponent } from '../components';

function Signup() {
  return (
    <div className='flex items-center justify-center min-h-screen bg-white py-8'>
      {/* Left Side - Text Section */}
      <div className='flex-1 max-w-md px-6 text-blue-600'>
        <h2 className='text-4xl font-extrabold mb-4'>Join Our Community</h2>
        <p className='text-lg mb-6'>
          Sign up today to explore our latest posts, connect with like-minded people, and become a part of our creative community. Discover stories, share your thoughts, and let your voice be heard.
        </p>
        <p className='text-lg'>
          Whether you're an avid reader or an aspiring writer, there's a place for you at Blog Forge. Get started now and make your mark!
        </p>
      </div>

      {/* Right Side - Signup Form */}
      <div className='flex-1 max-w-sm p-6 bg-white '>
        <SignupComponent />
      </div>
    </div>
  );
}

export default Signup;

