import React from 'react'
import '../App.css';

const Footer = () => {
  const handleClick = () => {
    window.scrollTo(0,0);
  }

  return (
    <footer className="footer-styles">
      <p id="p-footer" onClick={handleClick}>to top</p>
    </footer>
  )
}

export default Footer
