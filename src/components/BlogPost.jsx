import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowLeft, User } from 'lucide-react';
import './BlogPost.css';

const BlogPost = ({ post }) => {
  return (
    <article className="blog-post">
      <div className="blog-post-header">
        <Link to="/blog" className="back-link">
          <ArrowLeft size={18} />
          Back to Blog
        </Link>
        <div className="blog-post-meta">
          <span className="blog-post-category">{post.category}</span>
          <span className="blog-post-date">
            <Calendar size={14} />
            {post.date}
          </span>
          <span className="blog-post-author">
            <User size={14} />
            QllmSoft Team
          </span>
        </div>
        <h1 className="blog-post-title">{post.title}</h1>
      </div>

      <div className="blog-post-layout">
        <div className="blog-post-content">
          {post.sections && post.sections.map((section, index) => (
            <div key={index} className="blog-section">
              {section.heading && <h2>{section.heading}</h2>}
              {section.content && <div dangerouslySetInnerHTML={{ __html: section.content }} />}
              {section.paragraphs && section.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              {section.list && (
                <ul className="blog-list">
                  {section.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        
        <aside className="blog-post-sidebar">
          {post.image && (
            <div className="blog-featured-image">
              <img src={post.image} alt={post.title} loading="lazy" />
            </div>
          )}
          
          <div className="blog-cta-card">
            <h3>Need Help With Your Project?</h3>
            <p>Let's discuss how QllmSoft can help transform your business.</p>
            <Link to="/contact" className="btn btn-primary">Get Free Quote</Link>
          </div>
        </aside>
      </div>
    </article>
  );
};

export default BlogPost;
