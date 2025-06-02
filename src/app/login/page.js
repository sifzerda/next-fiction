// src/app/login/page.js
"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Layout from '../../components/Layout';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(null);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);

    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      localStorage.setItem('token', data.token);
      setMessage('Login successful!');
      router.push('/');
    } else {
      setMessage(data.error || 'Login failed');
    }
  };

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[35vh] w-full px-4 text-center">
        <div className="max-w-md w-full space-y-4">
          <h1 className="text-2xl font-bold bg-bootstrapDark text-yellow px-4 py-2 rounded-md">
            Login
          </h1>

          <div className="bg-bootstrapDark rounded-2xl shadow-lg p-6">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Email"
                className="p-2 border border-gray-300 rounded text-black placeholder-gray-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required />

              <input
                type="password"
                placeholder="Password"
                className="p-2 border border-gray-300 rounded text-black placeholder-gray-400"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required />

              <button
                type="submit"
                className="bg-yellow text-black font-semibold py-2 px-4 rounded hover:bg-llBlue hover:text-white transition">
                Login
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
