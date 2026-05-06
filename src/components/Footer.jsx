import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h3>Sami's Collections</h3>
            <p>
              Your ultimate destination for premium fashion, elegant accessories, and high-quality beauty products. Experience luxury like never before.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" title="Share">Share</a>
              <a href="#" className="social-link" title="Message">Chat</a>
            </div>
          </div>

          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/collection">Collections</Link></li>
              <li><Link to="/shop">Shop Now</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Contact Info</h3>
            <ul className="footer-links">
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <MapPin size={16} /> 123 Fashion Street, NY 10001
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone size={16} /> +1 (555) 123-4567
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Mail size={16} /> support@samiscollections.com
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Newsletter</h3>
            <p>Subscribe to receive updates, access to exclusive deals, and more.</p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter your email" className="newsletter-input" />
              <button type="submit" className="newsletter-btn">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Sami's Collections. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
