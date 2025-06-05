"use client";

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation'; // <-- import this to get the current route

function decodeJWT(token) {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const payload = decodeURIComponent(
      atob(base64)
        .split('')
        .map(c => `%${('00' + c.charCodeAt(0).toString(16)).slice(-2)}`)
        .join('')
    );
    return JSON.parse(payload);
  } catch (err) {
    console.error('❌ Failed to decode JWT:', err);
    return null;
  }
}

function CommentForm() {
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState('');
  const [message, setMessage] = useState('');
  const [user, setUser] = useState(null);
  const pathname = usePathname(); // get current route
  const page = pathname.split('/')[1] || 'home'; // fallback to 'home' if on "/"

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.warn("⚠️ No token found in localStorage.");
      setUser(null);
      return;
    }

    const decoded = decodeJWT(token);
    if (decoded) {
      setUser({ id: decoded.sub || decoded.userId, email: decoded.email });
    } else {
      console.error("❌ Invalid JWT.");
      setUser(null);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    if (!user) {
      setMessage('You must be logged in to comment.');
      return;
    }
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      const res = await fetch('/api/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ content, page }),
      });
      if (res.ok) {
        setMessage('✅ Comment submitted!');
        setContent('');
        window.location.reload();
      } else {
        const data = await res.json();
        setMessage(data.error || '❌ Submission failed');
      }
    } catch (error) {
      setMessage('❌ Submission failed');
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return (
      <div className="bg-llllBlue text-black px-4 py-2 rounded border border-gray-400">
        <p>Please log in to leave a comment.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <textarea
        className="w-full border border-gray-300 p-2 rounded text-black"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write your comment..."
        required
      />
      <button type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
        disabled={loading}>
        Submit
        {loading ? 'Submitting...' : 'Submit'}
      </button>
      {message && <p className="text-sm mt-2">{message}</p>}
    </form>
  );
}

export default CommentForm;
