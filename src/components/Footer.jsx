import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <h3>HopeForAll</h3>
              <p>Building hope, transforming lives</p>
            </div>
            <p className="footer-description">
              We are committed to creating sustainable change in communities worldwide 
              through education, healthcare, and empowerment initiatives.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">📘</a>
              <a href="#" className="social-link">🐦</a>
              <a href="#" className="social-link">📷</a>
              <a href="#" className="social-link">💼</a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Programs</a></li>
              <li><a href="#">Volunteer</a></li>
              <li><a href="#">Donate</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Programs</h4>
            <ul className="footer-links">
              <li><a href="#">Education for All</a></li>
              <li><a href="#">Healthcare Access</a></li>
              <li><a href="#">Clean Water Initiative</a></li>
              <li><a href="#">Women Empowerment</a></li>
              <li><a href="#">Emergency Relief</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>123 Hope Street, Global City, GC 12345</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <span>info@hopeforall.org</span>
              </div>
            </div>
            <div className="newsletter-signup">
              <h5>Stay Updated</h5>
              <div className="newsletter-form">
                <input type="email" placeholder="Your email" className="newsletter-input" />
                <button className="btn btn-primary newsletter-btn">Subscribe</button>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2024 HopeForAll NGO. All rights reserved.</p>
            <div className="footer-legal">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Transparency Report</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer