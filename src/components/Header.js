import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const headerStyles = {
    backgroundColor: 'rgb(0,219,0)',
    color: '#FFFFFF',
  }

  const ulStyles = {
    display: 'flex',
    listStyle: 'none',
    justifyContent: 'space-between',
    margin: '3% 10%',
  }

  return (
    <header style={headerStyles}>
      <h1>Recycle NYC</h1>
      <ul style={ulStyles}>
        <li><Link to="/">home</Link></li>
        <li><Link to="/about">about</Link></li>
        <li><Link to="/resources">resources</Link></li>
        <li><Link to="/by-borough">by borough</Link></li>
        <li><Link to="/near-you">near you</Link></li>
      </ul>
      <h3>Waste Not, Want Not: Find a public recycling bin near you!</h3>
    </header>



  )
}

export default Header
