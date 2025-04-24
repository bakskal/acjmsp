import { useState } from 'react';
import './Acj.css'
import './ContactModal.css'; // for animation
import ContactModal from './ContactModal';

export default function ACJMSPLandingPage() {
  const [activeTab, setActiveTab] = useState('services');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(prev => !prev);
  };
  const services = [
    { 
      id: 1, 
      icon: "fa-server", 
      title: 'IT Support & Management', 
      description: 'Comprehensive IT support tailored for non-profit organizations, including help desk, system monitoring, and maintenance.' 
    },
    { 
      id: 2, 
      icon: "fa-shield-alt", 
      title: 'Cybersecurity Audits', 
      description: 'Thorough security assessments to identify vulnerabilities and implement protection strategies for your sensitive data.' 
    },
    { 
      id: 3, 
      icon: "fa-wifi", 
      title: 'Network Infrastructure', 
      description: 'Design, implementation, and maintenance of reliable network solutions to keep your organization connected.' 
    },
    { 
      id: 4, 
      icon: "fa-users", 
      title: 'Non-Profit IT Consulting', 
      description: 'Strategic technology planning and guidance specifically designed for the unique needs of non-profit organizations.' 
    }
  ];

  const benefits = [
    'Reduced IT costs through non-profit focused pricing',
    'Specialized understanding of non-profit tech needs',
    'Increased operational efficiency',
    'Enhanced data security and compliance',
    'Technology that aligns with your mission'
  ];

  return (
    <div className="page-wrapper">
      {/* Accessibility improvements */}
      <a href="#main-content" className="skip-link">Skip to main content</a>

      {/* Header */}
      <header className="site-header">
        <div className="container header-container">
          <div className="logo-container">
            <h1 className="logo">ACJMSP</h1>
            <p className="tagline">Managed Services for Non-Profits</p>
          </div>

          {/* Mobile menu button */}
          <button 
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <ul className="nav-list">
              <li className="nav-item">Services</li>
              <li className="nav-item">About</li>
              <li className="nav-item">Contact</li>
              <li className="nav-item">
                <button className="cta-button">Get Started</button>
              </li>
            </ul>
          </nav>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <nav className="mobile-nav">
            <ul className="mobile-nav-list">
              <li className="mobile-nav-item">Services</li>
              <li className="mobile-nav-item">About</li>
              <li className="mobile-nav-item">Contact</li>
              <li className="mobile-nav-item">
                <button className="cta-button full-width">Get Started</button>
              </li>
            </ul>
          </nav>
        )}
      </header>

      <main id="main-content">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="container text-center">
            <h2 className="hero-title">IT Solutions for Non-Profits, By a Non-Profit</h2>
            <p className="hero-text">
              Empowering your mission with technology services specifically designed for non-profit organizations.
            </p>
            <div className="button-group">
              <button className="primary-button">Schedule a Consultation</button>
              <button className="secondary-button">Learn More</button>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="services-section">
          <div className="container">
            {/* Tab Navigation */}
            <div className="tabs-container">
              <div className="tab-navigation">
                <button 
                  className={`tab-button ${activeTab === 'services' ? 'active-tab' : ''}`}
                  onClick={() => setActiveTab('services')}
                  aria-selected={activeTab === 'services'}
                  role="tab"
                >
                  Our Services
                </button>
                <button 
                  className={`tab-button ${activeTab === 'benefits' ? 'active-tab' : ''}`}
                  onClick={() => setActiveTab('benefits')}
                  aria-selected={activeTab === 'benefits'}
                  role="tab"
                >
                  Why Choose Us
                </button>
              </div>
            </div>

            {/* Tab Content */}
            <div className="tab-content">
              {activeTab === 'services' ? (
                <div className="services-grid">
                  {services.map(service => (
                    <div key={service.id} className="service-card">
                      <div className="service-icon">
                        <i className={`fas ${service.icon}`}></i>
                      </div>
                      <h3 className="service-title">{service.title}</h3>
                      <p className="service-description">{service.description}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="benefits-card">
                  <h3 className="benefits-title">Benefits of Working with ACJMSP</h3>
                  <div className="benefits-list">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="benefit-item">
                        <i className="fas fa-check-circle benefit-icon"></i>
                        <p className="benefit-text">{benefit}</p>
                      </div>
                    ))}
                  </div>
                  <div className="benefits-footer">
                    <p className="benefits-footer-text">
                      As a non-profit ourselves, we understand your unique challenges and goals.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="testimonial-section">
          <div className="container text-center">
            <h2 className="section-title">Trusted by Non-Profits Like Yours</h2>
            <div className="testimonial-card">
              <p className="testimonial-text">
                "ACJMSP transformed our technology infrastructure, allowing us to focus on our mission instead of IT problems. Their understanding of non-profit operations made all the difference."
              </p>
              <div className="testimonial-author">
                <p className="author-name">Sarah Johnson</p>
                <p className="author-title">Executive Director, Community Outreach Foundation</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
  <div className="container text-center">
    <h2 className="cta-title">Ready to Optimize Your Non-Profit's Technology?</h2>
    <p className="cta-text">
      Let's discuss how we can support your mission with tailored IT solutions.
    </p>
    <button className="cta-button-large" onClick={toggleForm}>
      Schedule Your Free Consultation
    </button>

    <div className={`contact-form-wrapper ${showForm ? 'open' : ''}`}>
  {showForm && (
    <ContactModal isOpen={true} onClose={() => setShowForm(false)} />
  )}
</div>

  </div>
</section>

      </main>

      {/* Footer */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-column">
              <h3 className="footer-logo">ACJMSP</h3>
              <p className="footer-description">
                A non-profit managed services provider dedicated to empowering other non-profit organizations through technology.
              </p>
            </div>
            <div className="footer-column">
              <h4 className="footer-heading">Contact Us</h4>
              <div className="contact-list">
                <div className="contact-item">
                  <i className="fas fa-envelope contact-icon"></i>
                  <span className="contact-text">hello@acjmsp.com</span>
                </div>

                {/* Parked
                <div className="contact-item">
                  <i className="fas fa-phone-alt contact-icon"></i>
                  <span className="contact-text">(210) 123-4567</span>
                </div> */}

                {/* Parked
                <div className="contact-item">
                  <i className="fas fa-map-marker-alt contact-icon"></i>
                  <span className="contact-text">123 Non-Profit Way, Suite 200<br />San Antonio, TX </span>
                </div> */}
              </div>
            </div>
            {/*
            <div className="footer-column">
              <h4 className="footer-heading">Stay Connected</h4>
              <p className="newsletter-text">Subscribe to our newsletter for non-profit tech tips and updates.</p>
              <div className="newsletter-form">
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="newsletter-input"
                  aria-label="Email subscription"
                />
                <button className="newsletter-button">Subscribe</button>
              </div>
            </div> */}
          </div>
          <div className="footer-bottom">
            <p className="copyright-text">© {new Date().getFullYear()} ACJMSP. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}