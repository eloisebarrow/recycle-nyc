import React from 'react'

const Footer = () => {
  const footerStyles = {
    backgroundColor: 'rgb(0,219,0)',
    height: '60px',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '3%',
  }

  const linkStyles = {
    alignSelf: 'center',
    color: '#FFFFFF',
    textDecoration: 'none',
    fontSize: '1.4rem',
  }

  const handleClick = () => {
    window.scrollTo(0,0);
  }

  return (
    <footer style={footerStyles}>
      <p id="p-footer" style={linkStyles} onClick={handleClick} >to top</p>
    </footer>
  )
}

export default Footer
