import React from 'react';
import { Star, Quote } from 'lucide-react';
import './Testimonials.css';

const reviews = [
  {
    name: 'Sarah Jenkins',
    role: 'E-commerce Owner',
    text: 'Beefly helped me switch from a terrible shared host to a reliable VPS. My store loads 3x faster now.',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'Tech Blogger',
    text: 'The comparison matrix is the most accurate I have found. No fluff, just hard data on uptime and response times.',
    rating: 5
  },
  {
    name: 'Emma Watson',
    role: 'Freelance Designer',
    text: 'Saved me hours of research. I found the perfect hosting for my portfolio site within 10 minutes.',
    rating: 4
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials-section section-padding" id="reviews">
      <div className="container">
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <h2 className="h2">Don't Just Take Our Word For It</h2>
          <p className="text-secondary">Join thousands of webmasters who found their perfect host.</p>
        </div>
        
        <div className="testimonials-grid">
          {reviews.map((review, index) => (
            <div key={index} className="testimonial-card glass">
              <Quote className="quote-icon text-accent" size={40} />
              <div className="stars">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-accent" fill="currentColor" />
                ))}
              </div>
              <p className="review-text">"{review.text}"</p>
              <div className="reviewer-info">
                <div className="reviewer-avatar">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h5 className="h5" style={{ margin: 0, fontSize: '1rem' }}>{review.name}</h5>
                  <span className="text-secondary" style={{ fontSize: '0.8rem' }}>{review.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
