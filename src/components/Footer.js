import React from 'react'
import '../App.css';
import './Footer.css';

const Footer = () => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  return (
    <footer className="footer-styles">
      <p id="p-footer" onClick={handleClick}>to top</p>
    </footer>
  )
}

export default Footer
