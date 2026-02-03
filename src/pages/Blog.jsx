import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import blogPostsData from '../data/blogPostsData';
import './Blog.css';

const BlogCardItem = ({ slug, post }) => (
  <article className="blog-card">
    <div className="blog-card-image">
      <img src={post.image} alt={post.title} loading="lazy" />
      <span className="blog-card-category">{post.category}</span>
    </div>
    <div className="blog-card-content">
      <div className="blog-card-meta">
        <span className="blog-card-date">
          <Calendar size={14} />
          {post.date}
        </span>
      </div>
      <h3 className="blog-card-title">
        <Link to={`/blog/${slug}`}>{post.title}</Link>
      </h3>
      <p className="blog-card-description">{post.description}</p>
      <Link to={`/blog/${slug}`} className="blog-card-link">
        Read More
        <ArrowRight size={16} />
      </Link>
    </div>
  </article>
);

const Blog = () => {
  const blogPosts = Object.entries(blogPostsData);

  return (
    <main className="blog-page">
      {/* Hero Section */}
      <section className="blog-hero">
        <div className="container">
          <h1>Our Blog</h1>
          <p>
            Stay updated with the latest trends, insights, and best practices 
            in software development, technology, and digital transformation.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section blog-grid-section">
        <div className="container">
          <div className="section-title">
            <h2>Latest Articles</h2>
            <p>Explore our insights on technology and software development</p>
          </div>
          <div className="blog-grid">
            {blogPosts.map(([slug, post]) => (
              <BlogCardItem key={slug} slug={slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section newsletter-section bg-light">
        <div className="container">
          <div className="newsletter-content">
            <div className="newsletter-text">
              <h2>Subscribe to Our Newsletter</h2>
              <p>Get the latest articles, tips, and industry insights delivered straight to your inbox.</p>
            </div>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="newsletter-input"
                required
              />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Need Expert Software Development?</h2>
            <p>Let us help you build innovative solutions for your business</p>
            <Link to="/contact" className="btn btn-primary">Contact Us</Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blog;
