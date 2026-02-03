import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import './BlogCard.css';

const BlogCard = ({ post }) => {
  return (
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
          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>
        <p className="blog-card-description">{post.description}</p>
        <Link to={`/blog/${post.slug}`} className="blog-card-link">
          Read More
          <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;
