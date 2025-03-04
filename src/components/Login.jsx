import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login as authLogin } from '../store/authSlice';
import { Button, Input } from './index.js';
import { useDispatch } from 'react-redux';
import authService from '../appwrite/auth';
import { useForm } from 'react-hook-form';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState('');

  const login = async (data) => {
    setError('');
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(authLogin(userData));
          navigate('/');
        }
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className='flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 to-gray'>
      {/* Left Side - Text Section */}
      <div className='hidden md:flex flex-1 max-w-md px-6 text-white'>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-4xl font-extrabold mb-4'>Welcome Back!</h2>
          <p className='text-lg mb-6 text-neutral-400'>
            Sign in to explore the latest posts, connect with our community, and continue where you left off. Log in to access your account and enjoy a personalized experience.
          </p>
          <p className='text-lg text-neutral-400'>
            Don't have an account?
            <span className='mx-2'> 
            <Link to='/signup' className='underline text-white hover:text-yellow-400'>Sign up here</Link>
            </span>
            and join our creative community!
          </p>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className='flex items-center justify-center'>
      <div className='flex-1 max-w-sm w-full p-6  flex justify-center items-center'>
        <div className='w-full'>
          <div className='mb-4 flex justify-center'>
            <span className='inline-block w-24'>
              <h1 className='text-4xl text-white text-center'>.blog</h1>
            </span>
          </div>
          <h2 className='text-center text-2xl  leading-tight text-white'>Sign in to your account</h2>

          {error && <p className='text-red-300 mt-8 text-center'>{error}</p>}
          <form onSubmit={handleSubmit(login)} className='mt-8'>
            <div className='space-y-5'>
              <Input
                label={<span className="text-white">Email</span>}
                placeholder="Enter your email"
                type="email"
                className="bg-transparent border border-white text-black placeholder-gray-400"
                {...register("email", {
                  required: true,
                  validate: {
                    matchPattern: (value) =>
                      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                      "Email address must be a valid address",
                  },
                })}
              />
              <Input
                label={<span className="text-white">Password</span>}
                placeholder="Enter password"
                type="password"
                {...register("password", {
                  required: true,
                })}
                className="bg-transparent border border-white text-black placeholder-gray-400"
              />
              <Button type='submit' className='w-full bg-blue-600 text-gray-800'>
                Sign In
              </Button>
              <p className='mt-2 text-center text-muted-foreground text-white '>
                Don’t have an account? <span className='mx-2'><Link to='/signup' className='font-medium underline text-white'>Sign Up</Link></span>
            </p>
            </div>
          </form>
        </div>
      </div>
      </div>
     
    </div>
  );
}

export default Login;




