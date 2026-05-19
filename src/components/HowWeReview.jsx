import React from 'react';
import { Search, BarChart3, ThumbsUp } from 'lucide-react';
import './HowWeReview.css';

const steps = [
  {
    icon: Search,
    title: '1. In-depth Research',
    desc: 'We analyze the market, read terms of service, and verify company backgrounds to ensure reliability.'
  },
  {
    icon: BarChart3,
    title: '2. Performance Testing',
    desc: 'We buy the plans, set up test sites, and monitor uptime and speed over a minimum of 6 months.'
  },
  {
    icon: ThumbsUp,
    title: '3. Real User Feedback',
    desc: 'We combine our technical data with verified customer reviews to calculate the final Beefly Score.'
  }
];

const HowWeReview = () => {
  return (
    <section className="review-section section-padding">
      <div className="container">
        <div className="review-container glass">
          <div className="review-content">
            <h2 className="h2">How We Review</h2>
            <p className="text-secondary" style={{ marginBottom: '2rem' }}>
              At Beefly, transparency is our core value. We don't just copy-paste features; we put our money where our mouth is. Every host we recommend has been rigorously tested.
            </p>
            <div className="steps-list">
              {steps.map((step, i) => (
                <div key={i} className="step-item">
                  <div className="step-icon">
                    <step.icon size={24} className="text-accent" />
                  </div>
                  <div className="step-text">
                    <h4 className="h4" style={{ marginBottom: '0.25rem', fontWeight: 600 }}>{step.title}</h4>
                    <p className="text-secondary" style={{ fontSize: '0.9rem' }}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="review-visual">
            {/* Abstract representation of testing */}
            <div className="testing-graphic">
              <div className="pulse-circle"></div>
              <div className="testing-bars">
                <div className="bar b1"></div>
                <div className="bar b2"></div>
                <div className="bar b3"></div>
                <div className="bar b4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeReview;
