import { useState } from 'react'
import './Header.css'

const Header = ({ currentPage, setCurrentPage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'volunteer', label: 'Volunteer' }
  ]

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleNavClick = (pageId) => {
    setCurrentPage(pageId)
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h2>HopeForAll</h2>
            <span className="logo-subtitle">NGO</span>
          </div>
          
          <nav className="nav-desktop">
            {navItems.map(item => (
              <button
                key={item.id}
                className={`nav-link ${currentPage === item.id ? 'active' : ''}`}
                onClick={() => handleNavClick(item.id)}
              >
                {item.label}
              </button>
            ))}
            <button className="btn btn-primary donate-btn">
              Donate Now
            </button>
          </nav>

          <button 
            className="mobile-menu-toggle"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className="nav-mobile">
            {navItems.map(item => (
              <button
                key={item.id}
                className={`nav-link-mobile ${currentPage === item.id ? 'active' : ''}`}
                onClick={() => handleNavClick(item.id)}
              >
                {item.label}
              </button>
            ))}
            <button className="btn btn-primary mobile-donate-btn">
              Donate Now
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header