import React from 'react';
import { Globe, Server, Cloud, Lock, Mail, HardDrive } from 'lucide-react';
import './CategoryGrid.css';

const categories = [
  { id: 'domains', name: 'Domains', icon: Globe, desc: 'Find the perfect web address.' },
  { id: 'shared', name: 'Shared Hosting', icon: Server, desc: 'Great for beginners and small sites.' },
  { id: 'vps', name: 'VPS Hosting', icon: HardDrive, desc: 'More power, control, and flexibility.' },
  { id: 'cloud', name: 'Cloud Hosting', icon: Cloud, desc: 'Scalable and highly reliable.' },
  { id: 'ssl', name: 'SSL Certificates', icon: Lock, desc: 'Secure your site and build trust.' },
  { id: 'email', name: 'Email Hosting', icon: Mail, desc: 'Professional business email.' },
];

const CategoryGrid = () => {
  return (
    <section className="category-section section-padding" id="categories">
      <div className="container">
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <h2 className="h2">What are you looking for?</h2>
          <p className="text-secondary">Explore top-rated services across different categories.</p>
        </div>
        
        <div className="category-grid">
          {categories.map((cat, index) => (
            <div 
              key={cat.id} 
              className="category-card glass animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="category-icon-wrapper">
                <cat.icon size={28} className="text-accent" />
              </div>
              <h3 className="h3" style={{ fontSize: '1.25rem' }}>{cat.name}</h3>
              <p className="text-secondary" style={{ fontSize: '0.9rem' }}>{cat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
