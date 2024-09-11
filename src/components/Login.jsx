import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login as authLogin } from '../store/authSlice';
import { Button, Input, Logo } from './index.js';
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
    <div className='flex items-center justify-center min-h-screen bg-white py-8'>
      {/* Left Side - Text Section */}
      <div className='flex-1 max-w-md px-6 text-blue-600'>
        <h2 className='text-4xl font-extrabold mb-4'>Welcome Back!</h2>
        <p className='text-lg mb-6'>
          Sign in to explore the latest posts, connect with our community, and continue where you left off. Log in to access your account and enjoy a personalized experience.
        </p>
        <p className='text-lg'>
          Don't have an account? <Link to='/signup' className='underline text-blue-800 hover:text-blue-600'>Sign up here</Link> and join our creative community!
        </p>
      </div>

      {/* Right Side - Login Form */}
      <div className='flex-1 max-w-sm p-6 bg-white rounded-lg shadow-lg border  border-black/10'>
        <div className='mb-4 flex justify-center'>
          <span className='inline-block w-24'>
            <Logo width='100%' />
          </span>
        </div>
        <h2 className='text-center text-2xl font-bold leading-tight text-black'>Sign in to your account</h2>
        <p className='mt-2 text-center text-base text-black'>
          Don’t have an account? <Link to='/signup' className='font-medium underline'>Sign Up</Link>
        </p>
        {error && <p className='text-red-300 mt-8 text-center'>{error}</p>}
        <form onSubmit={handleSubmit(login)} className='mt-8'>
          <div className='space-y-5'>
            <Input
              label="Email:"
              placeholder="Enter your email"
              type="email"
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
              label="Password:"
              placeholder="Enter password"
              type="password"
              {...register("password", {
                required: true,
              })}
            />
            <Button type='submit' className='w-full bg-blue-600 text-gray-800 '>
              Sign In
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

