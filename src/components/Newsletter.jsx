import React from 'react';
import { Mail } from 'lucide-react';
import './Newsletter.css';

const Newsletter = () => {
  return (
    <section className="newsletter-section section-padding">
      <div className="container">
        <div className="newsletter-container glass">
          <div className="newsletter-content">
            <h2 className="h2" style={{ marginBottom: '1rem' }}>Don't Miss Out on Hosting Deals</h2>
            <p className="text-secondary" style={{ marginBottom: '2rem' }}>
              We track the biggest discounts and secret sales. Join our weekly newsletter to get notified before they expire.
            </p>
            
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <div className="input-group">
                <Mail size={20} className="input-icon text-secondary" />
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="newsletter-input"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary" style={{ whiteSpace: 'nowrap' }}>
                Subscribe Now
              </button>
            </form>
            <p className="text-secondary mt-3" style={{ fontSize: '0.8rem', marginTop: '1rem' }}>
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
