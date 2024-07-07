// pages/login.tsx
"use client"
import React, { useState } from 'react';
import axios from 'axios';
import Nav from '../components/nav';
import Footer from '../components/Footer';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/login', { email, password });
      console.log('Login successful:', response.data);
      // Optionally, you can redirect the user to another page upon successful login
      // Router.push('/dashboard');
    } catch (error) {
      console.error('Error logging in:', error);
      setError('Invalid email or password. Please try again.');
    }
  };

  return (
    <>
      <Nav />
 
      <div className="flex justify-center items-center h-screen">
        <form onSubmit={handleSubmit} className="w-full max-w-sm p-4 bg-white rounded-lg shadow-lg border-2 border-indigo-300">
          <h2 className="text-center text-indigo-800 p-2 rounded-md text-2xl font-bold mb-4">Log In</h2>

          {error && <p className="text-red-500 mb-2">{error}</p>}

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
          >
            Log In
          </button>
          <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?{' '}
          <a href="/signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            Please Sign Up.
          </a>
        </p>
        </form>
        
        
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;
