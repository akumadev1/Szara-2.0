"use client";

import React from 'react';
import Link from 'next/link';
import HeroSection from './components/HeroSection';
import EducationPaths from './components/EducationPaths';
import BlogPosts from './components/BlogPosts';
import Partners from './components/Partners';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <BlogPosts />
      <EducationPaths />
      <Partners />
      <Link legacyBehavior href="/add-blog-post">
        <a>Add New Blog Post</a>
      </Link>
    </div>
  );
};

export default Home;
