import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLoginUserMutation } from '../../redux/features/auth/authApi';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/features/auth/authSlice';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const dispatch = useDispatch(); // Access the Redux dispatch function to trigger actions
    const [loginUser, { isLoading: loginLoading }] = useLoginUserMutation();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const data = { email, password };

        try {
            const response = await loginUser(data).unwrap();
            console.log(response); // Log the response to inspect its structure

            const { token, user } = response;
            dispatch(setUser({user}))

            alert('Logged in successfully');
            navigate('/'); // Redirect to homepage or any other page
        } catch (error) {
            setMessage('Invalid email or password.');
            console.error('Login error:', error); // Log error for debugging
        }
    };

    return (
        <div className='max-w-sm bg-white mx-auto p-8 mt-36'>
            <h2 className='text-2xl font-semibold pt-5'>Please Login</h2>
            <form onSubmit={handleLogin} className='space-y-5 max-w-sm mx-auto pt-8'>
                <input
                    type="email"
                    value={email}
                    placeholder='Email'
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    className='w-full bg-bgPrimary focus:outline-none px-5 py-3'
                />
                <input
                    type="password"
                    value={password}
                    placeholder='Password'
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    className='w-full bg-bgPrimary focus:outline-none px-5 py-3'
                />
                {message && (
                    <div className='text-red-500 text-xs'>
                        {message}
                    </div>
                )}
                <button
                    disabled={loginLoading}
                    className='w-full mt-5 bg-primary hover:bg-indigo-500 text-white font-medium py-3 rounded-md'>
                    Login
                </button>
            </form>
            <p className='my-5 text-center'>
                Don't have an account? <Link to="/register" className='text-red-700 italic'>Sign up </Link>now
            </p>
        </div>
    );
};

export default Login;
