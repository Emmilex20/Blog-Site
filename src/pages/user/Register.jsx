import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {useRegisterUserMutation} from '../../redux/features/auth/authApi';

const Register = () => {
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [registerUser, {isLoading}] = useRegisterUserMutation();

    const navigate = useNavigate()

    const handleRegister = async (e) => {
        e.preventDefault();
        const data = {
            username,
            email,
            password
        }
        try {
            await registerUser(data).unwrap();
            alert("Registration Successful!");
            navigate('/login');
        } catch (error) {
            setMessage(error.message);
            alert("Registration failed")
        }
    }

  return (
    <div className='max-w-sm bg-white mx-auto p-8 mt-36'>
        <h2 className='text-2xl font-semibold pt-5'>Please Sign-Up</h2>
        <form 
        onSubmit={handleRegister}
        className='space-y-5 max-w-sm mx-auto pt-8'>
            <input 
                type="text" 
                value={username} 
                placeholder='Username'
                required
                onChange={(e) => setUserName(e.target.value)}  
                className='w-full bg-bgPrimary focus:outline-none px-5 py-3'
            />
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
            {
                message && <div className={`text-red-500 text-xs ${message === 'Invalid email or password.'? 'block' : 'hidden'}`}>
                    {message}
                </div>
            }
            <button className='w-full mt-5 bg-primary hover:bg-indigo-500 text-white font-medium py-3 rounded-md'>Register</button>
        </form>
        <p className='my-5 text-center'>Have an account? please <Link to="/login" className='text-red-700 italic'>Login</Link></p>
    </div>
  )
}

export default Register;
