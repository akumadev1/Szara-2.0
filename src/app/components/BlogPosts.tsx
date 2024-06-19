import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './BlogPosts.module.css';

type BlogPost = {
  id: number;
  image: string;
  title: string;
  date: string;
};

const BlogPosts = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await fetch('/api/blogPosts');
        if (!response.ok) {
          throw new Error('Failed to fetch blog posts');
        }
        const data = await response.json();
        setBlogPosts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Najnowsze wpisy na blogu</h2>
      <div className={styles.grid}>
        {blogPosts.map((post) => (
          <div key={post.id} className={styles.blogPost}>
            <img src={post.image} alt={post.title} className={styles.image} />
            <div className={styles.content}>
              <p className={styles.date}>{post.date}</p>
              <h3 className={styles.postTitle}>{post.title}</h3>
              <Link legacyBehavior href={`/blog/${post.id}`}>
                <a className={styles.readMore}>Czytaj dalej</a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPosts;
