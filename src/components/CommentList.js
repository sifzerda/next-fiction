// src/components/CommentList.js
'use client';

import { useEffect, useState } from 'react';

function CommentList() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchComments() {
      try {
        const res = await fetch('/api/comments');
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        setComments(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchComments();
  }, []);

  if (loading) return <p>Loading comments...</p>;

  return (
    <div className="space-y-4 mt-6">
      <h2 className="text-xl font-semibold">Comments</h2>
      {comments.length === 0 && <p>No comments yet.</p>}
      {comments.map((comment) => (
<div
  key={comment.id}
  className="bg-white text-gray-800 p-3 rounded-lg shadow-md border border-gray-400">
  <div className="flex justify-between text-sm text-gray-500 font-mono mb-1">
    <span>{comment.user?.username || 'Anonymous'}</span>
    <span>{new Date(comment.createdAt).toLocaleString()}</span>
  </div>
  <p className="text-sm leading-relaxed">{comment.content}</p>
</div>
      ))}
    </div>
  );
}

export default CommentList;