"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const AddBlogPost = () => {
  const [image, setImage] = useState('');
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/blogPosts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ image, title, date }),
      });

      if (response.ok) {
        router.push('/');
      } else {
        console.error('Failed to add blog post');
      }
    } catch (error) {
      console.error('Failed to add blog post:', error);
    }
  };

  return (
    <div>
      <h1>Add Blog Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Image URL</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Date</label>
          <input
            type="text"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Blog Post</button>
      </form>
    </div>
  );
};

export default AddBlogPost;
