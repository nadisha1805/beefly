import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './FAQ.css';

const faqs = [
  {
    q: 'What is the difference between shared hosting and VPS?',
    a: 'Shared hosting means you share a server and its resources with other websites. It\'s cheaper but less powerful. VPS (Virtual Private Server) gives you a dedicated portion of a server\'s resources, offering better performance and control.'
  },
  {
    q: 'Do I get a free domain name?',
    a: 'Many of the top providers we recommend, like HostGator and Bluehost, offer a free domain name for the first year when you sign up for an annual plan.'
  },
  {
    q: 'How accurate are your uptime tests?',
    a: 'We use premium third-party monitoring tools (like Pingdom) to track our test sites every minute. Our uptime data represents real-world performance over a minimum of 6 months.'
  },
  {
    q: 'Can I migrate my existing website for free?',
    a: 'Most top-tier hosts offer at least one free site migration. They usually have a dedicated plugin or a team to handle the transfer seamlessly without downtime.'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="faq-section section-padding" id="faq">
      <div className="container" style={{ maxWidth: '800px' }}>
        <div className="text-center" style={{ marginBottom: '3rem' }}>
          <h2 className="h2">Frequently Asked Questions</h2>
          <p className="text-secondary">Got questions? We've got answers.</p>
        </div>
        
        <div className="faq-accordion">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item glass ${openIndex === index ? 'active' : ''}`}
            >
              <button 
                className="faq-question" 
                onClick={() => toggleFAQ(index)}
              >
                <span style={{ fontWeight: 600, fontSize: '1.1rem' }}>{faq.q}</span>
                <ChevronDown 
                  className={`faq-icon ${openIndex === index ? 'rotate' : ''}`} 
                  size={20} 
                />
              </button>
              <div 
                className="faq-answer"
                style={{ 
                  maxHeight: openIndex === index ? '200px' : '0',
                  opacity: openIndex === index ? 1 : 0
                }}
              >
                <p className="text-secondary">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
