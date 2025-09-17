import React, { useState } from 'react'

const Nav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Education' },
    { href: '#contact', label: 'Contact' }
  ]

  const handleNavClick = (href) => {
    setMobileMenuOpen(false)
    // Smooth scroll to section
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="nav">
      <div className="logo">
        Cecilie Ellegaard Jacobsen
      </div>
      
      <ul className="nav-links">
        {navItems.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className="nav-link"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick(item.href)
              }}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      
      <button 
        className="mobile-menu-btn"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        ☰
      </button>
      
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <ul>
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(item.href)
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Nav