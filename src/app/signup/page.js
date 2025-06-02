// src/app/signup/page.js
"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Layout from '../../components/Layout';

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, username }),
      });

      const text = await res.text();
      const data = text ? JSON.parse(text) : {};

      if (res.ok) {
        if (data.token) {
          localStorage.setItem('token', data.token);
        }
        router.push('/');
      } else {
        setMessage(data.message || data.error || 'Signup failed.');
      }
    } catch (err) {
      setMessage('Signup failed. Please try again.');
      console.error('Signup error:', err);
    }
  }

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[40vh] w-full px-4 text-center">
        <div className="max-w-md w-full space-y-4">
          <h1 className="text-2xl font-bold bg-bootstrapDark text-yellow px-4 py-2 rounded-md">
            Signup
          </h1>

          <div className="bg-bootstrapDark rounded-2xl shadow-lg p-6">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="p-2 border border-gray-300 rounded text-black placeholder-gray-400" />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="p-2 border border-gray-300 rounded text-black placeholder-gray-400" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="p-2 border border-gray-300 rounded text-black placeholder-gray-400" />
              <button
                type="submit"
                className="bg-yellow text-black font-semibold py-2 px-4 rounded hover:bg-llBlue hover:text-white transition">
                Sign Up
              </button>
              {message && (
                <p className="text-sm text-yellow text-center mt-2">{message}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Signup;