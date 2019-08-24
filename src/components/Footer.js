import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const footerStyles = {
    backgroundColor: 'rgb(0,219,0)',
    color: '#FFFFFF',
    height: '60px',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '50%',
  }

  const linkStyles = {
    alignSelf: 'center',
    color: '#FFFFFF',
    textDecoration: 'none',
    fontSize: '1.4rem',
  }

  return (
    <footer style={footerStyles}>
      <Link style={linkStyles} to="/">to top</Link>
    </footer>
  )
}

export default Footer
