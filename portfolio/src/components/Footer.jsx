import React from 'react'
import { VscGithubInverted } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";


const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/cecilieej',
      icon: <VscGithubInverted />
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/cecilie-ellegaard-jacobsen',
      icon: <FaLinkedin />
    },
    {
      name: 'Email',
      url: 'mailto:cecilieej@outlook.com',
      icon: <HiOutlineMail />
    }
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="social-links">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
          
          <p>&copy; {currentYear} Cecilie Jacobsen. All rights reserved.</p>
          
          <p>
            Built with ❤️ using React & Vite
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer