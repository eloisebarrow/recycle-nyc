import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const headerStyles = {
    backgroundColor: 'rgb(0,219,0)',
    color: '#FFFFFF',
    padding: '1% 0',
  }

  const ulStyles = {
    display: 'flex',
    listStyle: 'none',
    justifyContent: 'space-between',
    margin: '3% 10%',
  }

  const linkStyles = {
    color: '#FFFFFF',
    textDecoration: 'none',
    fontSize: '1.4rem',
  }

  const h3Styles = {
    fontStyle: 'italic',
  }

  return (
    <header style={headerStyles}>
      <h1>Recycle NYC</h1>
      <ul style={ulStyles}>
        <li><Link style={linkStyles} to="/">home</Link></li>
        <li><Link style={linkStyles} to="/about">about</Link></li>
        <li><Link style={linkStyles} to="/resources">resources</Link></li>
        <li><Link style={linkStyles} to="/by-borough">by borough</Link></li>
        <li><Link style={linkStyles} to="/near-you">near you</Link></li>
      </ul>
      <h3 style={h3Styles}>Waste Not, Want Not: Find a public recycling bin near you!</h3>
    </header>
  )
}

export default Header
