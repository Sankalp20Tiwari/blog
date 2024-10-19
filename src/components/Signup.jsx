import React, { useState } from 'react';
import authService from '../appwrite/auth';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../store/authSlice';
import { Button, Input } from "./index.js";
import { useDispatch } from 'react-redux';
import { useForm } from "react-hook-form";

function Signup() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState("");

    const create = async (data) => {
        setError("");
        try {
            const userData = await authService.createAccount(data);
            if (userData) {
                const userData = await authService.getCurrentUser();
                if (userData) {
                    dispatch(login(userData));
                    navigate("/");
                }
            }
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div>
            <div className="mb-4 flex justify-center">
                <h1 className='text-4xl text-white text-center'>.blog</h1>
            </div>
            <h2 className="text-center text-2xl leading-tight text-white">Sign up to create account</h2>
            <p className="mt-2 text-center text-base text-white">
                Already have an account?&nbsp;
                <Link
                    to="/login"
                    className="font-medium text-gray-900 transition-all duration-200 hover:underline"
                >
                    Sign In
                </Link>
            </p>
            {error && <p className="text-red-600 mt-4 text-center">{error}</p>}
            <form onSubmit={handleSubmit(create)}>
                <div className='space-y-5'>
                    <Input
                        label={<span className="text-white">Full Name:</span>}
                        placeholder="Enter your full name"
                        className="bg-transparent border border-white text-black placeholder-gray-400"
                        {...register("name", { required: true })}
                    />
                    <Input
                        label={<span className="text-white">Email:</span>}
                        placeholder="Enter your email"
                        type="email"
                        className="bg-transparent border border-white text-black placeholder-gray-400"
                        {...register("email", {
                            required: true,
                            validate: {
                                matchPattern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                    "Email address must be a valid address",
                            }
                        })}
                    />
                    <Input
                        label={<span className="text-white">Password</span>}
                        placeholder="Enter password"
                        type="password"
                        className="<bg-gray-800></bg-gray-800> border border-white text-black placeholder-gray-400"
                        {...register("password", { required: true })}
                    />
                    <Button type='submit' className='w-full'>Create Account</Button>
                </div>
            </form>
        </div>
    );
}

export default Signup;

